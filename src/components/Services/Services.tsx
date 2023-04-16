import Image from "next/image";
import React, { FC } from "react";
import s from "./Services.module.scss";

interface ServicesProps {
	servicesList: {
		title: string;
		description: string;
		image: string;
	}[];
}

const Services: FC<ServicesProps> = ({ servicesList }) => (
	<div className={s.container}>
		{servicesList.map(({ title, description, image }) => (
			<div className={s.item}>
				{/* <Image src={image} alt="" className={s.image} /> */}
				<div className={s.image}>{title}</div>
				<div className={s.content}>
					<h2 className={s.title}>{title}</h2>
					<p className={s.description}>{description}</p>
				</div>
			</div>
		))}
	</div>
);

export default Services;
