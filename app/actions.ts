"use server";
import { PreviousState } from "@/lib/definitions";
import EmailService from "@/lib/services/EmailService";

export async function sendEmail(_: PreviousState, formdata: FormData) {
	return await EmailService.send(formdata);
}
