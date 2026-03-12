"use server";
import { PreviousState, ResponseProps } from "@/lib/definitions";
import EmailService from "@/lib/services/EmailService";
import { headers } from "next/headers";
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

const redis = new Redis({ token: process.env.UPSTASH_REDIS_REST_TOKEN, url: process.env.UPSTASH_REDIS_REST_URL })
const rateLimiter = new Ratelimit({ redis: redis, limiter: Ratelimit.slidingWindow(3, "30 m") })
export async function sendEmail(_: PreviousState, formdata: FormData) {
	try {
		const headersList = await headers();

		const ip = (headersList.get('cf-connecting-ip') ?? headersList.get("x-forwarded-for") ?? '127.0.0.1').split(',')[ 0 ].trim();
		const successKey = `contact-success:${ip}`;
		const hasSuccessKey = await redis.get(successKey);
		const attemptKey = `attempt:${ip}`
		if (hasSuccessKey)
			return { status: "fail", statusCode: 429, message: 'You have recently sent an email, please wait a while before sending another.' } as ResponseProps

		const getRemainingAttempts = await rateLimiter.getRemaining(attemptKey);
		if (getRemainingAttempts.remaining === 0) return { status: 'fail', statusCode: 429, message: 'You have made too many attempts, please try again later' } as ResponseProps

		const response = await EmailService.send(formdata) as ResponseProps;
		if (response.status === "success")
			await redis.set(successKey, "1", { ex: 600 });
		else await rateLimiter.limit(attemptKey)

		return response;
	} catch (error) {
		return { status: 'fail', statusCode: 500, message: 'An unexpected error has occurred, please try again later.' } as ResponseProps
	}
}
