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
export interface UserType {
	avatar_url: string;
}

export type FormType = {
	from: string;
	name: string;
	message: string;
};
