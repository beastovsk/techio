import LandingLayout from "../src/components/Layout/Layout";
import Services from "../src/components/Services/Services";

export default function Home() {
	const servicesList = [
		{
			title: "Промо-сайт",
			description: "Представим ваш бренд на сайте (1 страница)",
			image: "Lorem",
		},
		{
			title: "Сайт-визитка",
			description:
				"Представим и расскажем про ваш бренд, вашу деятельность (до 5 страниц)",
			image: "Lorem",
		},
		{
			title: "Корпоративный сайт",
			description:
				"Сайт с полной информацией о вашей компании, деятельности и услугах (до 8 страниц)",
			image: "Lorem",
		},
		{
			title: "Сайт каталог",
			description: "Каталог услуг вашей компании (до 10 страниц)",
			image: "Lorem",
		},
		{
			title: "Интернет магазин",
			description: "Ваша онлайн точка продажи (до 10 страниц)",
			image: "Lorem",
		},
	];

	return (
		<LandingLayout>
			<Services servicesList={servicesList} />
		</LandingLayout>
	);
}
