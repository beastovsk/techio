import { Button, Drawer } from "antd";
import Link from "next/link";
import React, { FC, useState } from "react";
import s from "./LandingHeader.module.scss";

import useMedia from "use-media";

interface LandingHeaderProps {}

const LandingHeader: FC<LandingHeaderProps> = () => {
	const [drawer, setDrawer] = useState(false);

	const isBurger = useMedia({ maxWidth: "768px" }, true);

	const navigationList = [
		{
			id: 0,
			title: "Home",
		},
		{
			id: 1,
			title: "Services",
		},
		{
			id: 2,
			title: "Portfolio",
		},
	];

	return (
		<div className={s.container}>
			<div className={s.logo}>
				Tech<span className={s.logoSpan}>.io</span>
			</div>
			{isBurger ? (
				<Button className={s.burger} onClick={() => setDrawer(!drawer)}>
					<svg
						width="30"
						height="22"
						viewBox="0 0 33 26"
						fill="grey"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M30.9375 0C32.0767 0 33 0.909347 33 2.03125C33 3.15315 32.0767 4.0625 30.9375 4.0625H2.0625C0.923337 4.0625 0 3.15315 0 2.03125C0 0.909347 0.923337 0 2.0625 0H30.9375ZM30.9375 10.9687C32.0767 10.9687 33 11.8781 33 13C33 14.1219 32.0767 15.0312 30.9375 15.0312H2.0625C0.923337 15.0312 0 14.1219 0 13C0 11.8781 0.923337 10.9687 2.0625 10.9687H30.9375ZM30.9375 21.9375C32.0767 21.9375 33 22.8468 33 23.9687C33 25.0907 32.0767 26 30.9375 26H2.0625C0.923337 26 0 25.0907 0 23.9687C0 22.8468 0.923337 21.9375 2.0625 21.9375H30.9375Z" />
					</svg>
				</Button>
			) : (
				<>
					<nav className={s.navigation}>
						{navigationList.map(({ id, title }) => (
							<Link href="" key={id} className={s.navItem}>
								{title}
							</Link>
						))}
					</nav>
					<Button type="primary" size="large">
						Contact with us
					</Button>
				</>
			)}

			<Drawer onClose={() => setDrawer(false)} open={drawer} width={320}>
				<nav className={s.navigation}>
					{navigationList.map(({ id, title }) => (
						<Link href="" key={id} className={s.navItem}>
							{title}
						</Link>
					))}
				</nav>
				<div className={s.btnContainer}>
					<Button type="primary" size="large" className={s.button}>
						Contact with us
					</Button>
				</div>
			</Drawer>
		</div>
	);
};

export default LandingHeader;
