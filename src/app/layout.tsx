import { Footer } from "@/components/footer";
import { ScrollSmoother } from "@/components/gsap/scroll-smoother";
import { Navigation } from "@/components/navigation";
import { Noise } from "@/components/noise";
import "@/styles/index.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded } from "next/font/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const unbounded = Unbounded({
	variable: "--font-unbounded",
	weight: ["400", "900"],
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "PRSHL",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ScrollSmoother>
				<body
					className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} antialiased`}
				>
					<div className="w-screen h-screen" id="smooth-wrapper">
						<div id="smooth-content">
							{children}
							<Footer />
						</div>
					</div>
					<Noise />
					<Navigation />
				</body>
			</ScrollSmoother>
		</html>
	);
}
