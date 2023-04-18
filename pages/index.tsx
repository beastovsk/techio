import LandingLayout from "../src/components/Layout/Layout";

import meeting from "../src/assets/lottie/meeting.json";
import developing from "../src/assets/lottie/developing.json";
import result from "../src/assets/lottie/result.json";

import Roadmap from "../src/components/Roadmap/Roadmap";
import Info from "../src/components/Info/Info";
import Banner from "../src/components/Banner/Banner";
import TechnologiesList from "../src/components/TechnologiesList/TechnologiesList";

export default function Home() {
	const roadmapList = [
		{
			title: "Планирование",
			subtitle: "Определение потребности, цели и тематики сайта",
			lottie: meeting,
			link: "",
			reversed: false,
		},
		{
			title: "Разработка",
			subtitle:
				"Пишем код для вашего продукта на современных технологиях для быстрого взаимодействия клиента с сайтом",
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
			<Banner />
			<Info />
			<Roadmap roadmapList={roadmapList} />
			<TechnologiesList />
		</LandingLayout>
	);
}
