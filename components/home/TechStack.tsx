"use client";
import ColoredTypography from "@/components/ui/ColoredTypography";
import { Stack, Typography } from "@mui/joy";
import {
	SiBootstrap,
	SiBun,
	SiDart,
	SiDbeaver,
	SiDocker,
	SiDrizzle,
	SiElectron,
	SiExpress,
	SiFlask,
	SiFlutter,
	SiGit,
	SiGithub,
	SiGitlab,
	SiJavascript,
	SiJest,
	SiJira,
	SiJsonwebtokens,
	SiMongodb,
	SiMui,
	SiMysql,
	SiNetlify,
	SiNextdotjs,
	SiNodedotjs,
	SiNpm,
	SiPassport,
	SiPostman,
	SiPrisma,
	SiPython,
	SiReact,
	SiRender,
	SiSequelize,
	SiSupabase,
	SiSwagger,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiVite,
} from "react-icons/si";
import Skill, { type SkillProps } from "./Skill";

const languageSkills: SkillProps[] = [
	{
		title: "JavaScript",
		url: "https://www.javascript.com/",
		description: "Multi-paradigm programming language with object-oriented capabilities.",
		icon: SiJavascript,
	},
	{
		title: "TypeScript",
		url: "https://www.typescriptlang.org",
		description: "Statically typed superset that compiles into Javascript.",
		icon: SiTypescript,
	},
	{
		title: "Python",
		url: "https://www.python.org/",
		description: "Statically typed superset that compiles into Javascript.",
		icon: SiPython,
	},
	{
		title: "Dart",
		url: "https://www.dart.dev/",
		description: "An approachable, portable, and productive language for high-quality apps on any platform",
		icon: SiDart,
	},
];
const backendSkills: SkillProps[] = [
	{
		title: "Node.js",
		url: "https://nodejs.org/en",
		description: "Runtime environment Node.js",
		icon: SiNodedotjs,
	},
	{
		title: "Bun",
		url: "https://bun.sh/",
		description: "Runtime environment which also natively supports TypeScript files. A more modern and efficient all-in-one toolkit replacement for Node.js",
		icon: SiBun,
	},
	{
		title: "Flask",
		url: "https://flask.palletsprojects.com/en/stable/",
		description: "Lightweight WSGI web application framework for Python",
		icon: SiFlask,
	},
	{
		title: "Express.js",
		url: "https://expressjs.com/",
		description: "Backend web framework for Node.js",
		icon: SiExpress,
	},
	{
		title: "Sequelize",
		url: "https://sequelize.org/",
		description: "Object-Relational Mapping tool (ORM) used to efficiently communicate with databases in the backend with code.",
		icon: SiSequelize,
	},
	{
		title: "Drizzle ORM",
		url: "https://orm.drizzle.team/",
		description: "A lightweight, type-safe TypeScript ORM with a SQL-like query API for relational databases.",
		icon: SiDrizzle,
	},
	{
		title: "Prisma",
		url: "https://www.prisma.io/",
		description: "A type-safe ORM for Node.js and TypeScript with a declarative schema, auto-generated client and migrations.",
		icon: SiPrisma,
	},
	{
		title: "MySQL",
		url: "https://www.mysql.com/",
		description: "MySQL database supporting relational data management.",
		icon: SiMysql,
	},
	{
		title: "Mongo DB",
		url: "https://www.mongodb.com/",
		description: "NoSQL database utlizing JSON-like documents for storing and querying data.",
		icon: SiMongodb,
	},
	{
		title: "Passport.js",
		url: "https://www.passportjs.org/",
		description: "Authentication middleware for Express.js that supports various authentication strategies, including social logins.",
		icon: SiPassport,
	},
	{
		title: "Json Web Token",
		url: "https://jwt.io/",
		description: "Widely used stateless authentication method for securely transmitting payloads.",
		icon: SiJsonwebtokens,
	},
	{
		title: "GoTrue",
		url: "https://github.com/supabase/auth",
		description: "An open-source JWT-based authentication API server for managing users and issuing tokens, used by Supabase Auth.",
		icon: SiSupabase,
	},
	{
		title: "Electron",
		url: "https://www.electronjs.org/",
		description: "A Node.js framework that enables web applications to run as desktop apps utlizing a bundled Chromium engine.",
		icon: SiElectron,
	},
	{
		title: "Swagger",
		url: "https://swagger.io/",
		description: "A documentation library for documenting API endpoints efficiently.",
		icon: SiSwagger,
	},
	{
		title: "Jest",
		url: "https://jestjs.io/",
		description: "Javascript testing framework for efficient and automated testing.",
		icon: SiJest,
	},
];
const frontendSkills: SkillProps[] = [
	{
		title: "Flutter",
		url: "https://flutter.dev",
		description: "Flutter is an open-source framework for building beautiful, natively compiled, multi-platform applications from a single codebase.",
		icon: SiFlutter,
	},
	{
		title: "Next.js",
		url: "https://nextjs.org/",
		description: "A full-stack framework for building efficient and scalable applications with React.",
		icon: SiNextdotjs,
	},
	{
		title: "React",
		url: "https://react.dev/",
		description: "A declarative and component-based front-end library for building user-interfaces.",
		icon: SiReact,
	},
	{
		title: "Joy UI",
		url: "https://mui.com/joy-ui/getting-started/",
		description: "An open-source React component library offering a modern and customizible design system.",
		icon: SiMui,
	},
	{
		title: "Bootstrap",
		url: "https://getbootstrap.com/",
		description: "A powerful and flexible mobile-friendly front-end toolkit for building modern and responsive UI designs.",
		icon: SiBootstrap,
	},
	{
		title: "Tailwind CSS",
		url: "https://tailwindcss.com/",
		description: "A utility-first CSS framework for rapidly building custom designs directly in your markup.",
		icon: SiTailwindcss,
	},
];
const toolSkills: SkillProps[] = [
	{
		title: "DBeaver",
		url: "https://dbeaver.io/",
		description: "A database management tool for directly interacting with various databases, including MySQL.",
		icon: SiDbeaver,
	},
	{
		title: "Postman",
		url: "https://www.postman.com/",
		description: "A widely used API platform for developing and testing APIs.",
		icon: SiPostman,
	},
	{
		title: "GitHub",
		url: "https://www.github.com",
		description: "A widely used platform for storing, managing and sharing projects using Git for version control.",
		icon: SiGithub,
	},
	{
		title: "GitLab",
		url: "https://www.gitlab.com",
		description: "A widely used platform for storing, managing and sharing projects using Git for version control.",
		icon: SiGitlab,
	},
	{
		title: "Node Package Manager",
		url: "https://www.npmjs.com/",
		description: "Package manager for Node.js used to install, manage and share Javascript dependencies.",
		icon: SiNpm,
	},
	{
		title: "Git",
		url: "https://git-scm.com/",
		description: "An open source distributed version control system for efficiently managing projects.",
		icon: SiGit,
	},
	{
		title: "Jira",
		url: "https://www.atlassian.com/software/jira",
		description: "A widely used project management tool for bug tracking, issue tracking and agile workflows.",
		icon: SiJira,
	},
];
const platformSkills: SkillProps[] = [
	{
		title: "Vite",
		url: "https://vite.dev/",
		description: "A fast and efficient frontend build tool for modern web applications.",
		icon: SiVite,
	},
	{
		title: "Render",
		url: "https://render.com/",
		description: "A cloud platform for building and deploying scalable web applications.",
		icon: SiRender,
	},
	{
		title: "Vercel",
		url: "https://vercel.com/",
		description: "A cloud platform for deploying scalable web applications with support for serverless functions, and optimized for Next.js",
		icon: SiVercel,
	},
	{
		title: "Netlify",
		url: "https://www.netlify.com/",
		description: "A cloud platform for deploying scalable web applications with support for serverless functions.",
		icon: SiNetlify,
	},
	{
		title: "Docker",
		url: "https://www.docker.com/",
		description: "A platform for building, shipping and running applications in portable, isolated containers.",
		icon: SiDocker,
	},
];
const Languages = () => (
	<>
		<ColoredTypography color="neutral" bold level="h3" sx={{ textAlign: { xs: 'center', md: 'start' }, my: 2 }}>Languages</ColoredTypography>
		<Stack direction={'row'} flexWrap={"wrap"} gap={2} sx={{ justifyContent: { xs: 'center', md: 'start' } }}>
			{languageSkills.map(skill => (<Skill key={skill.title} title={skill.title} description={skill.description} icon={skill.icon} url={skill.url} />))}
		</Stack>
	</>
);
const Backend = () => (
	<>
		<ColoredTypography level="h3" bold color="success" sx={{ textAlign: { xs: 'center', md: 'start' }, my: 2 }}>Back-end & Data</ColoredTypography>
		<Stack direction={'row'} flexWrap={"wrap"} gap={2} sx={{ justifyContent: { xs: 'center', md: 'start' } }}>
			{backendSkills.map(skill => (<Skill key={skill.title} color="success" title={skill.title} description={skill.description} icon={skill.icon} url={skill.url} />))}
		</Stack>
	</>
)
const Frontend = () => (
	<>
		<ColoredTypography level="h3" bold color="primary" sx={{ textAlign: { xs: 'center', md: 'start' }, my: 2 }}>Front-end & Full-stack</ColoredTypography>
		<Stack direction={'row'} flexWrap={"wrap"} gap={2} sx={{ justifyContent: { xs: 'center', md: 'start' } }}>
			{frontendSkills.map(skill => (<Skill key={skill.title} color="primary" title={skill.title} description={skill.description} icon={skill.icon} url={skill.url} />))}
		</Stack>
	</>
)
const Tools = () => (
	<>
		<ColoredTypography level="h3" bold color="warning" sx={{ textAlign: { xs: 'center', md: 'start' }, my: 2 }}>Tools & Applications</ColoredTypography>
		<Stack direction={'row'} flexWrap={"wrap"} gap={2} sx={{ justifyContent: { xs: 'center', md: 'start' } }}>
			{toolSkills.map(skill => (<Skill key={skill.title} color="warning" title={skill.title} description={skill.description} icon={skill.icon} url={skill.url} />))}
		</Stack>
	</>
)
const Platforms = () => (
	<>
		<ColoredTypography level="h3" bold color="danger" sx={{ textAlign: { xs: 'center', md: 'start' }, my: 2 }}>Platforms & Build Tools</ColoredTypography>
		<Stack direction={'row'} flexWrap={"wrap"} gap={2} sx={{ justifyContent: { xs: 'center', md: 'start' } }}>
			{platformSkills.map(skill => (<Skill key={skill.title} color="danger" title={skill.title} description={skill.description} icon={skill.icon} url={skill.url} />))}
		</Stack>
	</>
)

export default function TechStack() {
	return (
		<Stack
			component={"section"}
			sx={{ mt: 6, textAlign: { xs: "center", md: "end" }, mx: 5 }}
		>
			<Typography level="h1" sx={{ textAlign: { xs: 'center', md: 'start' }, mb: 2 }} >
				Tech{" "}
				<ColoredTypography
					level="h1"
				>
					Stack & Tools
				</ColoredTypography>
			</Typography>
			<Stack>
				<Languages />
				<Backend />
				<Frontend />
				<Tools />
				<Platforms />
			</Stack>
		</Stack>
	);
}
