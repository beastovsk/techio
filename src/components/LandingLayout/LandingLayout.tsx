import React, { FC } from "react";
import LandingHeader from "../LandingHeader/LandingHeader";
import styles from "./LandingLayout.module.scss";

interface LandingLayoutProps {}

const LandingLayout: FC<LandingLayoutProps> = () => (
	<div className={styles.LandingLayout}>
		<LandingHeader />
	</div>
);

export default LandingLayout;
