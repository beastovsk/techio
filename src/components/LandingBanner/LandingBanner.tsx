import { Button } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import s from "./LandingBanner.module.scss";

interface LandingBannerProps {}

const LandingBanner: FC<LandingBannerProps> = () => (
	<div className={s.container}>
		<Image src={""} alt="" />
		<div className={s.content}>
			<h1 className={s.title}>Make your life Day so much easy.</h1>
			<p className={s.subtitle}>
				Build one project that runs natively done by you users' devices
				to turn for that by.
			</p>
			<Button size="large" type="primary">Start for Free</Button>
		</div>
		<Image src={""} alt="" />
	</div>
);

export default LandingBanner;
