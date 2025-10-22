let count: number = 0;

export function stagger(reset: boolean, increment: number = 25): number {
	if (reset) {
		count = 0;
	}
	return count++ * increment;
}
