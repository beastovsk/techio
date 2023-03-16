import { Input } from "antd";
import React, { FC, useState } from "react";
import { customNotification } from "../../utils/notification";
import s from "./LayoutFooter.module.scss";

interface LayoutFooterProps {}

const LayoutFooter: FC<LayoutFooterProps> = () => {
	const [email, setEmail] = useState("");

	const companyInfo = [
		{ id: 0, label: "Россия" },
		{ id: 1, label: "+7 (111) 111 11-11" },
		{ id: 2, label: "email@mail.ru" },
	];

	const onSubmitContact = () => {
		customNotification(
			"success",
			"top",
			"Спасибо",
			"Мы скоро с вами свяжемся!"
		);

		console.log(`Users's email: ${email}`);

		setEmail("");
	};

	return (
		<div className={s.container}>
			<div className={s.header}>
				<h1 className={s.title}>Развивайте свой бизнес в интернете.</h1>
				<div className={s.feedback}>
					<Input
						className={s.input}
						placeholder="Введите свою почту"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						// onMouseDown={(e) => e.preventDefault()}
					/>
					<button className={s.button} onClick={onSubmitContact}>
						Начать
					</button>
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
