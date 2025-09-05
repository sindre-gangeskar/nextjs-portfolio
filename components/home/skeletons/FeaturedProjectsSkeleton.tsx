import TileSkeleton from "./TileSkeleton";

export default function FeaturedProjectsSkeleton() {
	return (
		<>
			{Array.from({ length: 6 }).map((_, index) => (
				<TileSkeleton key={index} />
			))}
		</>
	);
}
