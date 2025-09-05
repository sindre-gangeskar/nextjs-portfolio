export interface RepoType {
	name: string;
	fullname: string;
	stargazers_count: number;
	watchers_count: number;
	forks_count: number;
	url: string;
	description: string;
	ownerImgURL: string;
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