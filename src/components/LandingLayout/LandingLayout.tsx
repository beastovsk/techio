import React, { FC } from "react";
import LandingHeader from "../LandingHeader/LandingHeader";
import LayoutFooter from "../LayoutFooter/LayoutFooter";
import s from "./LandingLayout.module.scss";

interface LandingLayoutProps {
	children: any;
}

const LandingLayout: FC<LandingLayoutProps> = ({ children }) => (
	<div className={"page"}>
		<LandingHeader />
		<div className={s.content}>{children}</div>
		<LayoutFooter />
	</div>
);

export default LandingLayout;
