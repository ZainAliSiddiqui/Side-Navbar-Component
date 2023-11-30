"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function Home() {
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	return (
		<>
			<div>
				<div className="p-[20rem] fixed right-[0rem] z-10">
					<div
						onClick={() => {
							setIsActive(!isActive);
						}}
						className="w-[80rem] h-[80rem] rounded-[100%] bg-[#455ce9] cursor-pointer flex items-center justify-center">
						<div
							className={`w-full after:content-[""] after:block after:h-[1rem] after:w-[40%] after:m-auto after:bg-white after:relative after:transform after:duration-[0.3s] after:top-[-2rem] before:content-[""] before:block before:h-[1rem] before:w-[40%] before:m-auto before:bg-white before:relative before:transform before:duration-[0.3s] before:top-[2rem] ${
								isActive &&
								"after:transform after:rotate-[45deg] after:top-[-1rem] before:transform before:rotate-[-45deg] before:top-[0rem]"
							}`}></div>
					</div>
				</div>
			</div>
			<AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
		</>
	);
}
