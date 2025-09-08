export interface RepoType {
	name: string;
	fullname?: string;
	stargazers_count?: number;
	watchers_count?: number;
	forks_count?: number;
	url?: string;
	description?: string | null;
	ownerImgURL?: string;
}
export interface ProfileProps {
	src: string;
	size: number;
	id?: string;
	sx?: {};
}

export interface ResponseProps {
	statusCode: StatusCodeType
	status: "success" | "fail"
	message?: string
	data?: {}
}
export interface UserType {
	avatar_url: string;
}

export type FormType = {
	from: string;
	name: string;
	message: string;
};

export type StatusCodeType = 200 | 201 | 204 | 400 | 401 | 404 | 409 | 500