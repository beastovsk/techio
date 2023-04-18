import LandingLayout from "../src/components/Layout/Layout";
import Services from "../src/components/Services/Services";

export default function Home() {
	const servicesList = [
		{
			title: "Разработка сайта",
			description:
				"Узнаем ваши предпочтения, идеи и сделаем сайт для вашего бизнеса с нуля",
			image: "Lorem",
		},
		{
			title: "Поддержка сайта",
			description:
				"Начнем обслуживать ваш имеющийся сайт и позаботимся о нем",
			image: "Lorem",
		},
		{
			title: "Веб-дизайн",
			description:
				"Разработаем продающий дизайн макет сайта на основе статистики в сфере вашего бизнеса",
			image: "Lorem",
		},
		{
			title: "Аудит сайта",
			description:
				"Найдем ошибки и неточности в вашем сайте, которые мешают вам продавать больше и тормозят развитие вашего бизнеса в интернете",
			image: "Lorem",
		},
		{
			title: "Команда на аутсорс",
			description:
				"Предоставим разработчиков для ваших проектов по квалификации и навыкам",
			image: "Lorem",
		},
	];

	return (
		<LandingLayout>
			<Services servicesList={servicesList} />
		</LandingLayout>
	);
}
