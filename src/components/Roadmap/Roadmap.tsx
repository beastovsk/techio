import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import s from "./Roadmap.module.scss";
import { Player } from "@lottiefiles/react-lottie-player";

interface RoadmapProps {
	roadmapList: {
		title: string;
		subtitle: string;
		lottie: any;
		link: string;
		reversed: boolean;
	}[];
}

const Roadmap: FC<RoadmapProps> = ({ roadmapList }) => {
	return (
		<div className={s.container}>
			<h1 className={s.title}>Как нам удается эффективно работать?</h1>
			{roadmapList.map(({ title, subtitle, lottie, link, reversed }) => (
				<li
					className={reversed ? `${s.item} ${s.reverseFlex}` : s.item}
					key={title}
				>
					<div className={s.info}>
						<h1 className={s.label}>{title}</h1>
						<p className={s.subtitle}>{subtitle}</p>
						{/* <Link href={link} className={s.link}>
							What is {title}?
						</Link> */}
					</div>
					{/* <					<Image src={image} alt="" className={s.image} /> */}
					<Player src={lottie} className="player" loop autoplay />
				</li>
			))}
		</div>
	);
};

export default Roadmap;
