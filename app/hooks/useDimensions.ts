import { useEffect, useState } from "react";

export function useDimensions() {
	const [width, setWidth] = useState<number>();
	const [height, setHeight] = useState<number>();
	const updateDimensions = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};
	useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () =>
			window && window.removeEventListener("resize", updateDimensions);
	}, []);

	const size = width && width < 800 ? "mobile" : "desktop";

	return { size, width, height };
}