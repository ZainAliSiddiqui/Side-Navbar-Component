import { Home } from "@components";
import "@styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Side Menu",
	description: "Side Menu",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Home />
				{children}
			</body>
		</html>
	);
}
