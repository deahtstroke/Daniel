<script lang="ts">
	import { fadeFly, fadeFlyBlur } from "$lib/transitions/transitions";
	import { X } from "lucide-svelte";
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
		class="fixed flex flex-col right-0 top-0 h-dvh w-full min-[360px]:w-80 p-4 bg-sidebar-menu/56 backdrop-blur-xl border-l border-border-default z-50"
		role="dialog"
		aria-modal="true"
		aria-label="Navigation menu"
		transition:fadeFly={{ x: 50, y: 0, duration: 200, delay: 0 }}
	>
		<!-- Side bar header -->
		<div
			class="flex items-center justify-between px-6 py-6 border-b border-white/5"
		>
			<button
				{onclick}
				class="w-8 h-8 flex items-center justify-center text-white/40
				hover:text-white/90 focus:text-white/90 transition-colors duration-150 focus:outline none group hover:cursor-pointer"
				aria-label="Close menu"
			>
				<X
					class="w-4 h-4 group-hover:rotate-90 transition-transform duration-200"
				/>
			</button>
			<span
				class="text-bright font-[Satoshi-Regular] tracking-[0.2em] uppercase"
				>Where to?
			</span>
		</div>

		<!-- Side bar items -->
		<ul
			class="flex flex-1 px-4 py-8 flex-col gap-4 items-end justify-start"
			transition:fadeFlyBlur={{ delay: 190, duration: 500, y: 50 }}
		>
			{#each options as option, i (option)}
				<li
					class="menu-item px-4 py-2"
					class:animate-in={open}
					style="--delay: {i * 100}ms"
				>
					<a
						href={option.ref}
						class="group block px-3 py-2 text-default hover:text-bright focus:text-bright transition-all duration-150 relative"
					>
						<div
							class="absolute
						top-0 right-0 bottom-0 w-0.5 bg-white/80 scale-y-0
						group-hover:scale-y-100 group-focus:scale-y-100 transition-transform duration-300
						origin-center"
						></div>
						<div
							class="relative flex justify-center items-center gap-3 transform group-hover:translate-x-[-4px] group-focus:translate-x-[-4px] transition-transform duration-150"
						>
							<div class="flex flex-col gap-0.5 text-right">
								<span class="font-[Satoshi-Regular] text-sm">{option.name}</span
								>
								<span
									class="text-[10px] text-default font-[Satoshi-Light] tracking-wide normal-case"
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
			class="footer-item px-6 py-5 border-t border-white/5"
			class:animate-in={open}
			style="--delay: {options.length * 50 + 100}ms"
		>
			<div
				class="text-[10px] text-center tracking-[0.2em] uppercase font-[Satoshi-Light]"
			>
				© {new Date().getFullYear()} Daniel Villavicencio
			</div>
		</div>
	</div>
{/if}

<style>
	.footer-item,
	.menu-item {
		opacity: 0;
		transform: translateY(20px);
	}

	.footer-item.animate-in,
	.menu-item.animate-in {
		animation: flyUp 300ms ease-out forwards;
		animation-delay: var(--delay);
	}

	@keyframes flyUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
