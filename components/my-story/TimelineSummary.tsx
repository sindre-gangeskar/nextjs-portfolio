import Timeline from "../ui/Timeline";
import TimelineItem from "../ui/TimelineItem";
export default function TimelineSummary() {
	return (
		<Timeline>
			<TimelineItem
				title="Early Years"
				description={[
					"Influenced by animated movies early on, I wanted to work with computers and learn how to create 3D graphics the way they did. ",
					"I found a few 3D modeling tutorials, and I reached out to one of the creators to see if they could teach me. I was lucky enough to be personally taught by a very well known modder at the time called Millenia. ", "From this point I learned how to model high-poly models, reduce it to a low-poly, unwrap, texture and rig them ready for animations.", "I learned how to create models and animations and mod them into games."
				]}
				timeline={{ from: "2007", to: "2013" }}
			/>
			<TimelineItem
				title="Joining a game modding team"
				description={[
					"I joined a team developing a Source engine mod called Double Action: Boogaloo which later turned into a full game and released on Steam.", "I modeled and animated a weapon in the game called Stallion .45. I also animated a forward-facing character animation cycle which got blended with other animations.",
				]}
				timeline={{ from: "2013", to: "2016" }}
			/>
			<TimelineItem
				title="Unity and C#"
				description={[
					"After being a part of the initial Double Action team, my interest in development grew. I wanted to make my own projects with my own assets.",
					" The Unity game engine started to appear in numerous videos, and so did tutorials guiding people on how to develop game mechanics with C# and the game engine's API. This was my initial step towards learning how to code.",
				]}
				timeline={{ from: "2016", to: "2019" }}
			/>
			<TimelineItem
				title="Applying to Noroff and after"
				description={[
					"I had developed quite a good few game projects with C# in the Unity game engine as a hobby for a good few years. ",
					"Working professionally with computers had always been a dream of mine, and after spending most of my professional life as a warehouse temp, I chose to contact a school called Noroff to see what options were available to me.", "Since I had garnered quite a bit of experience with C# and the Unity game engine and showcased some of the projects, I had become eligible to apply to the back-end development studies at their school.",
					" During this time, I had learned a lot from my studies, and the interest in web development had grown to become more than just a hobby. My curiosity allowed me to learn to develop applications with frameworks and libraries that were outside of my curriculum.",
					"I finished my studies in January 2025 and landed an A. Web development has become my passion, and I am currently looking to apply my skills in a professional role."
				]}
				timeline={{ from: "2023", to: "2025" }}
			/>
		</Timeline>
	);
}
