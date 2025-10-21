<script lang="ts">
	import { fadeFly } from "$lib/transitions/transitions";
	import { X } from "lucide-svelte";
	import type { MenuOption } from "$lib/types/MenuOption";
	import { page } from "$app/state";

	let count: number = 1;
	let staggerFunc = (reset: boolean) => {
		if (reset) {
			count = 1;
		}
		return count++ * 50;
	};

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
		class="fixed flex flex-col right-0 top-0 h-dvh w-full min-[360px]:w-80 p-4 bg-sidebar-menu/56 backdrop-blur-xl border-l border-border-default z-50"
		role="dialog"
		aria-modal="true"
		aria-label="Navigation menu"
		transition:fadeFly={{
			x: 25,
			duration: 150,
			delay: 25,
		}}
	>
		<!-- Side bar header -->
		<div
			class="flex items-center justify-between px-6 py-6 border-b border-white/5"
		>
			<button
				{onclick}
				class="w-8 h-8 flex items-center justify-center text-default
				hover:text-bright focus:text-bright transition-colors duration-150
				focus:outline group hover:cursor-pointer"
				aria-label="Close menu"
			>
				<X
					class="w-4 h-4 group-hover:rotate-90 transition-transform duration-200"
				/>
			</button>
			<span class="text-default">Where to? </span>
		</div>

		<!-- Side bar items -->
		<ul class="flex flex-1 px-4 py-8 flex-col gap-4 items-end justify-start">
			{#each options as option}
				<li
					class="px-4 py-2"
					in:fadeFly|global={{
						delay: staggerFunc(false),
						duration: 150,
						y: -20,
					}}
				>
					<a
						href={option.ref}
						{onclick}
						class="group relative block px-3 py-2 text-bright sm:text-default
						hover:text-bright focus:text-bright transition-all duration-150"
					>
						{#if option.ref === page.url.pathname}
							<div
								class="absolute top-0 right-0 bottom-0 w-0.5 bg-cyan-400 scale-y-100"
							></div>
						{/if}
						<div class="relative flex justify-center items-center gap-3">
							<div class="flex flex-col gap-0.5 text-right">
								<span class="text-sm">{option.name}</span>
								<span class="text-xs text-default normal-case"
									>{option.desc}</span
								>
							</div>
							<option.icon class="w-4 h-4 flex-shrink-0" />
						</div>
					</a>
				</li>
			{/each}
		</ul>

		<!-- Sidebar footer -->
		<div
			in:fadeFly|global={{ delay: staggerFunc(true), duration: 300, y: -20 }}
			class="px-6 py-5 border-t border-white/5"
		>
			<div
				class="text-[10px] text-center tracking-[0.2em] uppercase font-[Satoshi-Light]"
			>
				© {new Date().getFullYear()} Daniel Villavicencio
			</div>
		</div>
	</div>
{/if}
