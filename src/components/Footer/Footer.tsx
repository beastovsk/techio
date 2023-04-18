import { Input } from "antd";
import Link from "next/link";
import React, { FC, useState } from "react";
import { customNotification } from "../../utils/notification";
import s from "./Footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
	const companyInfo = [
		{ id: 0, label: "Россия, Саратов", href: "" },
		{
			id: 1,
			label: "techio.sar@gmail.com",
			href: "mailto:techio.sar@gmail.com",
		},
	];

	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<h3 className={s.logo}>
					Tech<span className={s.logoSpan}>.io</span>
				</h3>
				<nav className={s.navigation}>
					<Link className={s.link} href={"/"}>
						Главная
					</Link>
					<Link className={s.link} href={"/services"}>
						Услуги
					</Link>
					<Link className={s.link} href={"/portfolio"}>
						Наши работы
					</Link>
				</nav>
				<ul className={s.list}>
					{companyInfo.map(({ id, label, href }) => (
						<a key={id} className={s.item} href={href}>
							{label}
						</a>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Footer;
