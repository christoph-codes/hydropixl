import { useEffect, useState } from "react";

export function useDimensions() {
	const [width, setWidth] = useState<number>();
	const [height, setHeight] = useState<number>();

	useEffect(() => {
		const updateDimensions = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};

		// Check if window is defined (client-side)
		if (typeof window !== "undefined") {
			updateDimensions(); // Set initial values
			window.addEventListener("resize", updateDimensions);

			return () => {
				window.removeEventListener("resize", updateDimensions);
			};
		}
	}, []);

	const size = width && width < 800 ? "mobile" : "desktop";

	return { size, width, height };
}
