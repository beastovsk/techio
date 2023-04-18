import Image from "next/image";
import React, { FC, useState } from "react";
import { ModalComponent } from "../UI/MyModal/ModalComponent";
import s from "./Services.module.scss";

interface ServicesProps {
	servicesList: {
		title: string;
		description: string;
		image: string;
	}[];
}

const Services: FC<ServicesProps> = ({ servicesList }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className={s.container}>
			{servicesList.map(({ title, description, image }) => (
				<div className={s.item} onClick={() => setOpen(true)}>
					{/* <Image src={image} alt="" className={s.image} /> */}
					<div className={s.image}>{title}</div>
					<div className={s.content}>
						<h2 className={s.title}>{title}</h2>
						<p className={s.description}>{description}</p>
					</div>
				</div>
			))}

			<ModalComponent
				title="Свяжитесь с нами"
				open={open}
				setOpen={setOpen}
			>
				<p className={s.contact}>techio.sar@gmail.com</p>
			</ModalComponent>
		</div>
	);
};

export default Services;
