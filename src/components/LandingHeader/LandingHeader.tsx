import React, { FC } from "react";
import s from "./LandingHeader.module.scss";

interface LandingHeaderProps {}

const LandingHeader: FC<LandingHeaderProps> = () => {
	const navigationList = [
		{
			id: 0,
			title: "Главная",
		},
		{
			id: 1,
			title: "Услуги",
		},
		{
			id: 2,
			title: "Портфолио",
		},
	];

	return (
		<div className={s.container}>
			<div className={s.logo}>TechIO</div>
			<nav className={s.navigation}>
				{navigationList.map(({ id, title }) => (
					<p key={id} className={s.navItem}>
						{title}
					</p>
				))}
			</nav>
		</div>
	);
};

export default LandingHeader;
