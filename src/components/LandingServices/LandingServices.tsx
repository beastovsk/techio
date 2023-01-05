import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import s from "./LandingServices.module.scss";

interface LandingServicesProps {
	servicesList: {
		title: string;
		subtitle: string;
		image: StaticImageData;
		link: string;
		reversed: boolean;
	}[];
}

const LandingServices: FC<LandingServicesProps> = ({ servicesList }) => {
	return (
		<ul className={s.container}>
			{servicesList.map(({ title, subtitle, image, link, reversed }) => (
				<li
					className={reversed ? `${s.item} ${s.reverseFlex}` : s.item}
				>
					<div className={s.info}>
						<h1 className={s.title}>{title}</h1>
						<p className={s.subtitle}>{subtitle}</p>
						<Link href={link} className={s.link}>
							What is {title}?
						</Link>
					</div>
					<Image src={image} alt="" className={s.image} />
				</li>
			))}
		</ul>
	);
};

export default LandingServices;
