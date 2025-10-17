<script lang="ts">
	import type { Milestone } from "$lib/types/Milestone";
	import { fadeFly } from "$lib/transitions/transitions";
	import { onMount } from "svelte";

	let { milestones, incrementFunc } = $props<{
		milestones: Milestone[];
		incrementFunc: () => number;
	}>();

	let visible: Milestone[] = $state([]);

	onMount(() => {
		for (const m of milestones) {
			visible = [...visible, m];
		}
	});
</script>

<section class="flex flex-col gap-4">
	<h2
		in:fadeFly={{ delay: incrementFunc(), duration: 300, x: 20 }}
		class="text-2xl font-semibold text-bright"
	>
		Career Milestones
	</h2>
	<div class="relative space-y-4">
		<!-- Vertical line -->
		<div class="absolute left-2 top-2 bottom-2 w-px bg-white/20"></div>
		{#each visible as milestone}
			<div class="relative pl-10">
				<!-- Dot -->
				<div
					class="absolute left-0 top-2 w-4 h-4 rounded-full bg-bg-default border-2 border-white/20"
				></div>

				<div
					in:fadeFly={{ delay: incrementFunc(), duration: 300, y: 20 }}
					class="space-y-2"
				>
					<div
						class="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4"
					>
						<h3 class="text-lg font-medium text-bright">{milestone.title}</h3>
						<span class="text-sm font-medium text-white/40"
							>{milestone.year}</span
						>
					</div>
					<p class="text-sm text-default leading-relaxed max-w-2xl">
						{milestone.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
