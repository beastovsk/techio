import React, { FC } from "react";
import s from "./LandingInfo.module.scss";

interface LandingInfoProps {}

const LandingInfo: FC<LandingInfoProps> = () => (
	<div className={s.container}>
		<h1 className={s.title}>
			Award-winning logistics services.
			<br />
			Powered by technology, delivered by experts.
		</h1>
		<p className={s.subtitle}>
			Businesses are leaving money on the table every day due to missed
			supply
			<br /> chain opportunities. Zencargo unlocks your potential with
			digital freight forwarding that <br /> drives cost savings and
			revenue improvements for your business.
		</p>
	</div>
);

export default LandingInfo;
