import LandingLayout from "../src/components/Layout/Layout";
import Services from "../src/components/Services/Services";

export default function Home() {
	const servicesList = [
		{
			title: "Lorem",
			description: "Lorem",
			image: "Lorem",
			price: "Lorem",
		},
		{
			title: "Lorem",
			description: "Lorem",
			image: "Lorem",
			price: "Lorem",
		},
		{
			title: "Lorem",
			description: "Lorem",
			image: "Lorem",
			price: "Lorem",
		},
	];

	return (
		<LandingLayout>
			<Services servicesList={servicesList} />
		</LandingLayout>
	);
}
