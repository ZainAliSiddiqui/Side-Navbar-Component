// MENUSLIDE
export const menuSlide = {
	initial: { x: "calc(100% + 100px)" },
	enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
	exit: {
		x: "calc(100% + 100px)",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
};
// SLIDE
export const slide = {
	initial: { x: 80 },
	enter: (i: number) => ({
		x: 0,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
	}),
	exit: (i: number) => ({
		x: 80,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
	}),
};

// SCALE
export const scale = {
	open: { scale: 1, transition: { duration: 0.3 } },
	closed: { scale: 0, transition: { duration: 0.4 } },
};

// CURVE
let initialPath = "";
let targetPath = "";

if (typeof window !== "undefined") {
	initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight
		} Q-100 ${window.innerHeight / 2} 100 0`;
	targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight
		} Q100 ${window.innerHeight / 2} 100 0`;
}

export const curve = {
	initial: {
		d: initialPath,
	},
	enter: {
		d: targetPath,
		transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
	},
	exit: {
		d: initialPath,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
};
