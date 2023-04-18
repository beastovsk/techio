import { Empty } from "antd";
import LandingLayout from "../src/components/Layout/Layout";
import Portfolio from "../src/components/Portfolio/Portfolio";

export default function Home() {
	return (
		<LandingLayout>
			<Portfolio />
		</LandingLayout>
	);
}
