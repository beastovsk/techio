import { Empty } from "antd";
import React, { FC } from "react";
import s from "./Portfolio.module.scss";

interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = () => (
	<div className={s.container}>
		<Empty description="" />
		<h1 className={s.title}>Первые проекты в разработке</h1>
	</div>
);

export default Portfolio;
