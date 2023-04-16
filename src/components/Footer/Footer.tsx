import { Input } from "antd";
import React, { FC, useState } from "react";
import { customNotification } from "../../utils/notification";
import s from "./Footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
	const companyInfo = [
		{ id: 0, label: "Россия" },
		{ id: 2, label: "email@mail.ru" },
	];

	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<h3 className={s.logo}>
					Tech<span className={s.logoSpan}>.io</span>
				</h3>
				<ul className={s.list}>
					{companyInfo.map(({ id, label }) => (
						<li key={id} className={s.item}>
							{label}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Footer;
