import "../styles/globals.scss";
import type { AppProps } from "next/app";

import { ConfigProvider } from "antd";
import locale from "antd/locale/ru_RU";

import { Roboto } from "@next/font/google";
import { Player } from "@lottiefiles/react-lottie-player";

import spinner from "../src/assets/lottie/loader.json";
import { useEffect, useState } from "react";

const roboto = Roboto({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
	}, []);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	});

	return (
		<ConfigProvider>
			<main className={roboto.className}>
				{!loading ? (
					<>
						<Component {...pageProps} />
					</>
				) : (
					<div className="spinner">
						<Player
							src={spinner}
							style={{ width: "150px", height: "150px" }}
							className="player"
							loop
							autoplay
						/>
					</div>
				)}
			</main>
		</ConfigProvider>
	);
}
