import { Button, Drawer, Form, Input, Tooltip } from "antd";
import Link from "next/link";
import React, { FC, useState } from "react";
import s from "./Header.module.scss";

import useMedia from "use-media";
import { ModalComponent } from "../UI/MyModal/ModalComponent";
import { customNotification } from "../../utils/notification";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
	const [contact] = Form.useForm();

	const [drawer, setDrawer] = useState(false);
	const [contactOpen, setContactOpen] = useState(false);

	const [loading, setLoading] = useState(false);

	const isBurger = useMedia({ maxWidth: "768px" }, true);

	const navigationList = [
		{
			id: 0,
			title: "Главная",
			link: "/",
		},
		{
			id: 1,
			title: "Услуги",
			link: "/services",
		},
		{
			id: 2,
			title: "Наши работы",
			link: "/portfolio",
		},
	];

	const onSubmitContact = async ({ email }: { email: string }) => {
		// Modal contact form (UX), async imitation
		setLoading(true);

		setTimeout(() => {
			setLoading(false);

			customNotification(
				"success",
				"top",
				"Спасибо",
				"Мы скоро с вами свяжемся!"
			);

			console.log(`Users's email: ${email}`);

			setContactOpen(false);
			contact.resetFields();
		}, 2000);
	};

	return (
		<div className={s.container}>
			<Link href="/">
				<div className={s.logo}>
					Tech<span className={s.logoSpan}>.io</span>
				</div>
			</Link>
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
						{navigationList.map(({ id, title, link }) => (
							<Link href={link} key={id} className={s.navItem}>
								{title}
							</Link>
						))}
					</nav>
					<Button
						type="primary"
						size="large"
						onClick={() => setContactOpen(true)}
					>
						Связаться с нами
					</Button>
				</>
			)}

			<Drawer onClose={() => setDrawer(false)} open={drawer} width={320}>
				<nav className={s.navigation}>
					{navigationList.map(({ id, title, link }) => (
						<Link href={link} key={id} className={s.navItem}>
							{title}
						</Link>
					))}
				</nav>
				<div className={s.btnContainer}>
					<Button
						type="primary"
						size="large"
						className={s.button}
						onClick={() => {
							setContactOpen(true);
							setDrawer(false);
						}}
					>
						Связаться с нами
					</Button>
				</div>
			</Drawer>

			<ModalComponent open={contactOpen} setOpen={setContactOpen}>
				<Form
					onFinish={onSubmitContact}
					form={contact}
					layout="vertical"
				>
					<p className={s.contactTitle}>Ваши контакты</p>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								type: "email",
								message:
									"Введите пожалуйста вашу корректную почту",
							},
						]}
					>
						<Input
							className={s.contactInput}
							placeholder="Введите вашу почту"
							size="large"
						/>
					</Form.Item>
					<Form.Item className={s.contactButtons}>
						<Button
							size="large"
							type="default"
							className={s.contactButton}
							onClick={() => setContactOpen(false)}
						>
							Отмена
						</Button>
						<Button
							size="large"
							type="primary"
							htmlType="submit"
							className={s.contactButton}
							loading={loading}
						>
							Отправить
						</Button>
					</Form.Item>
				</Form>
			</ModalComponent>
		</div>
	);
};

export default Header;
