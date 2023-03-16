import LandingBanner from "../src/components/LandingBanner/LandingBanner";
import LandingInfo from "../src/components/LandingInfo/LandingInfo";
import LandingLayout from "../src/components/LandingLayout/LandingLayout";
import LandingServices from "../src/components/LandingServices/LandingServices";

// import firstImage from "../src/assets/landing-image-1.svg";
// import secondImage from "../src/assets/landing-image-2.svg";
// import thirdImage from "../src/assets/landing-image-3.svg";

import meeting from "../src/assets/lottie/meeting.json";
import developing from "../src/assets/lottie/developing.json";
import result from "../src/assets/lottie/result.json";

export default function Home() {
	const servicesList = [
		{
			title: "Митинг",
			subtitle: "Определение потребности, цели и тематики сайта",
			lottie: meeting,
			link: "",
			reversed: false,
		},
		{
			title: "Разработка",
			subtitle:
				"Пишем код для вашего будущего продукта на современных технологиях для быстрого взаимодействия сайта с клиентом",
			lottie: developing,
			link: "",
			reversed: true,
		},
		{
			title: "Результат",
			subtitle:
				"Вы выходите на рынок, увеличиваете продажи и улучшаете свой бренд",
			lottie: result,
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
