import React, { FC } from "react";
import s from "./Info.module.scss";

interface InfoProps {}

const Info: FC<InfoProps> = () => (
	<div className={s.container}>
		<h1 className={s.title}>
			Кто мы такие?
			<br />
			Чем мы можем вам помочь?
		</h1>
		<p className={s.subtitle}>
			Мы - команда разработчиков с многолетним стажем.
			<br /> Умеем создавать сайты любой сложности для любой тематики,
			<br /> Увелечиваем продажи вашего бизнеса и помогаем увести клиентов
			у ваших конкурентов
		</p>
	</div>
);

export default Info;
