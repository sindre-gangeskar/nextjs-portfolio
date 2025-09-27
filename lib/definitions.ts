import { ColorPaletteProp } from "@mui/joy";

export interface RepoType {
	name: string;
	full_name?: string;
	stargazers_count?: number;
	watchers_count?: number;
	forks_count?: number;
	html_url?: string;
	description?: string | null;
	owner?: { avatar_url?: string };
	homepage?: string | null;
}
export interface ProfileProps {
	src: string;
	size: number;
	id?: string;
	sx?: {};
	ref?: string
}
export interface ResponseProps {
	statusCode: StatusCodeType
	status: "success" | "fail"
	message?: string
	data?: {}
}
export interface ProjectCardProps {
	title?: string;
	description?: string;
	footer?: string;
	url?: string;
	isRepo?: boolean;
	stars?: number;
	homepage?: string;
	color: ColorPaletteProp
}
export interface NavigationProps {
	href: string; name: string; icon?: React.ReactNode
}
export interface TimelineProps {
	title?: string
	description?: string[]
	imgUrl?: string
	timeline?: { from: string, to: string }
	direction?: "right" | "left"
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