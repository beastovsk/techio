import Head from "next/head";
import React, { FC } from "react";
import LandingHeader from "../LandingHeader/LandingHeader";
import LayoutFooter from "../LayoutFooter/LayoutFooter";
import s from "./LandingLayout.module.scss";

interface LandingLayoutProps {
	children: any;
}

const LandingLayout: FC<LandingLayoutProps> = ({ children }) => (
	<>
		<Head>
			<title>Tech.io</title>
			<meta name="description" content="Generated by create next app" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div className={"page"}>
			<LandingHeader />
			<div className={s.content}>{children}</div>
			<LayoutFooter />
		</div>
	</>
);

export default LandingLayout;
