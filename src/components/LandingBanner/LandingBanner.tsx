import { Button } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import s from "./LandingBanner.module.scss";

import womanImage from "../../assets/woman-banner.svg";
import manImage from "../../assets/man-banner.svg";
import arrow from "../../assets/arrow.svg";

import useMedia from "use-media";

interface LandingBannerProps {}

const LandingBanner: FC<LandingBannerProps> = () => {
	const tablet = useMedia({ minWidth: "769px" }, true);

	return (
		<div className={s.container}>
			{tablet ? (
				<Image src={womanImage} alt="" className={s.womanImage} />
			) : null}
			<div className={s.content}>
				<h1 className={s.title}>
					Make your life
					<br />
					Day so much easy.
				</h1>
				<p className={s.subtitle}>
					Build one project that runs natively done by you users'
					devices to turn for that by.
				</p>
				<button className={s.button}>
					Start for Free
					<Image src={arrow} alt="" className={s.arrow} />
				</button>
			</div>
			{tablet ? (
				<Image src={manImage} alt="" className={s.manImage} />
			) : null}
		</div>
	);
};

export default LandingBanner;
