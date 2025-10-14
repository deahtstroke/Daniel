<script lang="ts">
	import type { Project } from "$lib/types/Project";
	import { ExternalLinkIcon, Github } from "lucide-svelte";

	let { project } = $props<{
		project: Project;
	}>();
</script>

<article
	class="group relative bg-bg-card border border-border-medium
	hover:border-border-default transition-all duration-300 overflow-hidden"
>
	<div class="relative h-48 overflow-hiden bg-dark">
		<img
			src={project.image}
			alt={project.title}
			class="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"
		></div>
	</div>
	<div class="p-6 space-y-4">
		<h3
			class="text-xl font-[Satoshi-Light] tracking-wider text-light uppercase"
		>
			{project.title}
		</h3>
		Description
		<p class="text-sm text-default leading-relaxed font-[Satoshi-Light]">
			{project.description}
		</p>

		Tech Stack
		<div class="flex flex-wrap gap-2">
			{#each project.technologies as tech}
				<span
					class="px-2 py-1 text-[10px] uppercase tracking-wider bg-neutral-800/50 border border-border-default text-white/70 font-light"
				>
					{tech}
				</span>
			{/each}
		</div>

		<div class="flex gap-3 pt-2">
			<a
				href={project.githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider bg-bg-default border border-border-default text-default hover:text-light hover:border-light transition-all duration-500 group/link"
			>
				<Github class="w-4 h-4" />
				<span>Source</span>
			</a>
			{#if project.websiteUrl}
				<a
					href={project.websiteUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider bg-bg-default border border-border-default text-default hover:text-light hover:border-light transition-all duration-500 group/link"
				>
					<ExternalLinkIcon class="w-4 h-4" />
					<span>Visit</span>
				</a>
			{/if}
		</div>
	</div>
</article>
