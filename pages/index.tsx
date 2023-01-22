import LandingBanner from "../src/components/LandingBanner/LandingBanner";
import LandingInfo from "../src/components/LandingInfo/LandingInfo";
import LandingLayout from "../src/components/LandingLayout/LandingLayout";
import LandingServices from "../src/components/LandingServices/LandingServices";

import firstImage from "../src/assets/landing-image-1.svg";
import secondImage from "../src/assets/landing-image-2.svg";
import thirdImage from "../src/assets/landing-image-3.svg";

export default function Home() {
	const servicesList = [
		{
			title: "Develop",
			subtitle:
				"Develop for all your users' devices with just one codebase. Add fast refresh, true native capabilities, and your creativity, and you'll have the app your users want in no time.",
			image: firstImage,
			link: "",
			reversed: false,
		},
		{
			title: "Build",
			subtitle:
				"Develop for all your users' devices with just one codebase. Add fast refresh, true native capabilities, and your creativity, and you'll have the app your users want in no time.",
			image: secondImage,
			link: "",
			reversed: true,
		},
		{
			title: "Update",
			subtitle:
				"Develop for all your users' devices with just one codebase. Add fast refresh, true native capabilities, and your creativity, and you'll have the app your users want in no time.",
			image: thirdImage,
			link: "",
			reversed: false,
		},
	];
	return (
		<LandingLayout>
			<LandingBanner />
			<LandingInfo />
			<LandingServices servicesList={servicesList} />
		</LandingLayout>
	);
}
