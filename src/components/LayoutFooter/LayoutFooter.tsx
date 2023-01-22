import { Input } from "antd";
import React, { FC } from "react";
import s from "./LayoutFooter.module.scss";

interface LayoutFooterProps {}

const LayoutFooter: FC<LayoutFooterProps> = () => {
	const companyInfo = [
		{ id: 0, label: "Russia" },
		{ id: 1, label: "+7 (111) 111 11-11" },
		{ id: 2, label: "email@mail.ru" },
	];

	return (
		<div className={s.container}>
			<div className={s.header}>
				<h1 className={s.title}>Develop your business with us.</h1>
				<div className={s.feedback}>
					<Input
						className={s.input}
						placeholder="Input your email"
						// onMouseDown={(e) => e.preventDefault()}
					/>
					<button className={s.button}>Start</button>
				</div>
			</div>
			<div className={s.content}>
				<div className={s.info}>
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
		</div>
	);
};

export default LayoutFooter;
