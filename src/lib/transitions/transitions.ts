import { cubicOut } from "svelte/easing";

export function fadeFly(node: HTMLElement, params: {
	delay?: number,
	duration?: number,
	easing?: (t: number) => number,
	x?: number,
	y?: number
} = {}) {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const {
		delay = 0,
		duration = 400,
		easing = cubicOut,
		x = 0,
		y = 0,
	} = params;

	return {
		delay,
		duration,
		easing,
		css: (t: number, u: number) => {
			const translateX = x * u;
			const translateY = y * u;
			return `
				transform: ${transform} translate(${translateX}px, ${translateY}px);
				opacity: ${t};
			`;
		}
	};
}
