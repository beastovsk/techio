import { Button } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import s from "./Banner.module.scss";

import womanImage from "../../assets/woman-banner.svg";
import manImage from "../../assets/man-banner.svg";
import arrow from "../../assets/arrow.svg";

interface BannerProps {}

const Banner: FC<BannerProps> = () => {
	return (
		<div className={s.container}>
			<Image src={womanImage} alt="" className={s.womanImage} />

			<div className={s.content}>
				<h1 className={s.title}>
					Помогаем бизнесу
					<br />
					увеличивать продажи.
				</h1>
				<p className={s.subtitle}>
					Пишем сайты для быстрого и эффективного запуска вашего
					бизнеса в интернете.
				</p>
				<button className={s.button}>
					Начать
					<Image src={arrow} alt="" className={s.arrow} />
				</button>
			</div>

			<Image src={manImage} alt="" className={s.manImage} />
		</div>
	);
};

export default Banner;
