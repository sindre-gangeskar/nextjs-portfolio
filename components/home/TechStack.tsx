"use client";
import { Stack, Typography, Chip } from "@mui/joy";
import ColoredTypography from "@/components/ui/ColoredTypography";
import Skill from "./Skill";
import {
	SiJavascript,
	SiTypescript,
	SiNodedotjs,
	SiReact,
	SiNextdotjs,
	SiExpress,
	SiMysql,
	SiDbeaver,
	SiJest,
	SiPostman,
	SiMongodb,
	SiElectron,
	SiVite,
	SiMui,
	SiBootstrap,
	SiSequelize,
	SiJsonwebtokens,
	SiPassport,
	SiSwagger,
	SiGithub,
	SiGit,
	SiJira,
	SiRender,
	SiVercel,
	SiNetlify,
	SiNpm,
	SiBun,
} from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TechStack() {
	useGSAP(() => {
		const tl = gsap.timeline();
		tl.set("#skill", { opacity: 0, y: -25 });
		tl.to("#skill", { opacity: 1, stagger: 0.08, y: 0, ease: "elastic.out", duration: 1.25 });
	}, []);

	return (
	<Stack component={"section"} sx={{ mt: 15, textAlign: { xs: "center", md: "end" }, mx: 5 }}>
		<Typography level="h1">
			Tech{" "}
			<ColoredTypography level="h1" sx={{ textAlign: { xs: "center", md: "end" } }}>
				Stack & Tools
			</ColoredTypography>
		</Typography>
		<Stack>
			<Stack direction={"row"} ml={{ md: "auto" }} gap={2} mt={2} p={0.5} sx={{ display: "flex", flexWrap: "wrap", justifyContent: { xs: "center", md: "end" } }}>
				<Chip color="neutral">Programming Language</Chip>
				<Chip color="warning">Tool / Application</Chip>
				<Chip color="success">Back-end / Library</Chip>
				<Chip color="primary">Front-end / Full-stack</Chip>
				<Chip color="danger">Platform / Build Tool</Chip>
			</Stack>
		</Stack>
		<Stack direction={"row"} mt={5} gap={2} sx={{ display: "flex", justifyContent: "center", justifyItems: "center", flexWrap: "wrap", maxWidth: "md", mx: "auto" }}>
			<Skill id="skill" title="Javascript" url="https://www.javascript.com/" description="Multi-paradigm programming language with object-oriented capabilities." icon={SiJavascript} color="neutral"></Skill>
			<Skill id="skill" title="Typescript" url="https://www.typescriptlang.org/" description="Statically typed superset that compiles into Javascript." icon={SiTypescript} color="neutral"></Skill>
			<Skill id="skill" title="Node.js" url="https://nodejs.org/en" description="Runtime environment Node.js" icon={SiNodedotjs} color="success"></Skill>
			<Skill id="skill" title="Bun" url="https://bun.sh/" description="Runtime environment which also natively supports TypeScript files. A more modern and efficient all-in-one toolkit replacement for Node.js" icon={SiBun} color="success"></Skill>
			<Skill id="skill" title="Express.js" url="https://expressjs.com/" description="Backend web framework for Node.js" icon={SiExpress} color="success"></Skill>
			<Skill
				id="skill"
				title="Sequelize"
				url="https://sequelize.org/"
				description="Object-Relational Mapping tool (ORM) used to efficiently communicate with databases in the backend with code."
				icon={SiSequelize}
				color="success"></Skill>
			<Skill id="skill" title="MySQL" url="https://www.mysql.com/" description="MySQL database supporting relational data management." icon={SiMysql} color="success"></Skill>
			<Skill id="skill" title="Mongo DB" url="https://www.mongodb.com/" description="NoSQL database utlizing JSON-like documents for storing and querying data." icon={SiMongodb} color="success"></Skill>
			<Skill
				id="skill"
				title="Passport.js"
				url="https://www.passportjs.org/"
				description="Authentication middleware for Express.js that supports various authentication strategies, including social logins."
				icon={SiPassport}
				color="success"></Skill>
			<Skill
				id="skill"
				title="Json Web Token"
				url="https://jwt.io/"
				description="Widely used stateless authentication method for securely transmitting payloads."
				icon={SiJsonwebtokens}
				color="success"></Skill>
			<Skill
				id="skill"
				title="Electron"
				url="https://www.electronjs.org/"
				description="A Node.js framework that enables web applications to run as desktop apps utlizing a bundled Chromium engine."
				icon={SiElectron}
				color="success"></Skill>
			<Skill id="skill" title="Swagger" url="https://swagger.io/" description="A documentation library for documenting API endpoints efficiently." icon={SiSwagger} color="success"></Skill>
			<Skill id="skill" title="Jest" url="https://jestjs.io/" description="Javascript testing framework for efficient and automated testing." icon={SiJest} color="success"></Skill>
			<Skill
				id="skill"
				title="Next.js"
				url="https://nextjs.org/"
				description="A full-stack framework for building efficient and scalable applications with React."
				icon={SiNextdotjs}
				color="primary"></Skill>
			<Skill id="skill" title="React" url="https://react.dev/" description="A declarative and component-based front-end library for building user-interfaces." icon={SiReact} color="primary"></Skill>
			<Skill
				id="skill"
				title="Joy UI"
				url="https://mui.com/joy-ui/getting-started/"
				description="An open-source React component library offering a modern and customizible design system."
				icon={SiMui}
				color="primary"></Skill>
			<Skill
				id="skill"
				title="Bootstrap"
				url="https://getbootstrap.com/"
				description="A powerful and flexible mobile-friendly front-end toolkit for building modern and responsive UI designs."
				icon={SiBootstrap}
				color="primary"></Skill>
			<Skill
				id="skill"
				title="DBeaver"
				url="https://dbeaver.io/"
				description="A database management tool for directly interacting with various databases, including MySQL."
				icon={SiDbeaver}
				color="warning"></Skill>
			<Skill id="skill" title="Postman" url="https://www.postman.com/" description="A widely used API platform for developing and testing APIs." icon={SiPostman} color="warning"></Skill>
			<Skill
				id="skill"
				title="Github"
				url="https://www.github.com"
				description="A widely used platform for storing, managing and sharing projects using Git for version control."
				icon={SiGithub}
				color="warning"></Skill>
			<Skill
				id="skill"
				title="Node Package Manager"
				url="https://www.npmjs.com/"
				description="Package manager for Node.js used to install, manage and share Javascript dependencies."
				icon={SiNpm}
				color="warning"></Skill>
			<Skill id="skill" title="Git" url="https://git-scm.com/" description="An open source distributed version control system for efficiently managing projects." icon={SiGit} color="warning"></Skill>
			<Skill
				id="skill"
				title="Jira"
				url="https://www.atlassian.com/software/jira"
				description="A widely used project management tool for bug tracking, issue tracking and agile workflows."
				icon={SiJira}
				color="warning"></Skill>
			<Skill id="skill" title="Vite" url="https://vite.dev/" description="A fast and efficient frontend build tool for modern web applications." icon={SiVite} color="danger"></Skill>
			<Skill id="skill" title="Render" url="https://render.com/" description="A cloud platform for building and deploying scalable web applications." icon={SiRender} color="danger"></Skill>
			<Skill
				id="skill"
				title="Vercel"
				url="https://vercel.com/"
				description="A cloud platform for deploying scalable web applications with support for serverless functions, and optimized for Next.js"
				icon={SiVercel}
				color="danger"></Skill>
			<Skill
				id="skill"
				title="Netlify"
				url="https://www.netlify.com/"
				description="A cloud platform for deploying scalable web applications with support for serverless functions."
				icon={SiNetlify}
				color="danger"></Skill>
		</Stack>
	</Stack>
);
}
