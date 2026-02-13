import TechStack from "./TechStack";
import ContactForm from "./ContactForm";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
export default function Home() {
	return (
		<>
			<Hero />
			<TechStack />
			<FeaturedProjects />
			<ContactForm />
		</>
	);
}
