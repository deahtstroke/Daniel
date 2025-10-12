<script lang="ts">
	import { fadeFly, fadeFlyBlur } from "$lib/transitions/transitions";
	import type { MenuOption } from "$lib/types/MenuOption";

	let {
		open = false,
		options,
		onclick,
	} = $props<{
		open: boolean;
		options: MenuOption[];
		onclick: () => void;
	}>();
</script>

{#if open}
	<div
		class="fixed right-0 top-0 h-dvh w-40 p-4 bg-white/5 backdrop-blur-md z-50"
		transition:fadeFly={{ x: 50, y: 0, duration: 200, delay: 0 }}
	>
		<ul
			transition:fadeFlyBlur={{ delay: 210, duration: 200, y: 50 }}
			class="flex flex-col gap-4 items-center justify-center"
		>
			<button
				aria-label="hamburger menu"
				{onclick}
				class="hover:cursor-pointer text-white w-8 h-8 flex items-center justify-center"
			>
				<svg
					class="w-6 h-6"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					fill="none"
				>
					<path d="M6 6L18 18" />
					<path d="M6 18L18 6" />
				</svg>
			</button>
			{#each options as option}
				<li class="px-4 py-2">
					<a href={option.ref}>{option.name}</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
