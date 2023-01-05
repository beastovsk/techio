import "../styles/globals.scss";
import type { AppProps } from "next/app";

import { ConfigProvider } from "antd";
import locale from "antd/locale/ru_RU";

import { Roboto } from "@next/font/google";

const roboto = Roboto({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ConfigProvider>
			<main className={roboto.className}>
				<Component {...pageProps} />
			</main>
		</ConfigProvider>
	);
}
