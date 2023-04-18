import React, { FC } from "react";
import s from "./TechnologiesList.module.scss";

import Image from "next/image";

interface TechnologiesListProps {}

const TechnologiesList: FC<TechnologiesListProps> = () => {
	const frontendList = [
		{
			title: "Next.js",
			description:
				"Позволяет разрабатывать веб-приложения с меньшей скоростью загрузки страницы и используя улучшенную СЕО оптимизацию ",
			logo: "/icons/nextjs.svg",
			id: 0,
		},
		{
			title: "TypeScript",
			description:
				"Используется для логики приложения, обеспечивая безопасность типов данных",
			logo: "/icons/ts.svg",
			id: 1,
		},
		{
			title: "Ant.design",
			description: "Улучшает UI/UX сайта",
			logo: "/icons/antd.svg",
			id: 2,
		},
	];
	return (
		<div className={s.container}>
			<h1 className={s.title}>Для разработки мы используем</h1>
			<div className={s.list}>
				{frontendList.map(({ logo, title, description, id }) => (
					<div className={s.item} key={id}>
						<Image
							src={logo}
							alt=""
							width={80}
							height={80}
							quality={100}
							className={s.image}
						/>

						<h2 className={s.label}>{title}</h2>
						<p className={s.description}>{description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TechnologiesList;
