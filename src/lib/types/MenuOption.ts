import type { Icon } from "lucide-svelte";

export interface MenuOption {
	name: string;
	desc: string,
	ref: string;
	icon: typeof Icon;
	target?: string;
}
