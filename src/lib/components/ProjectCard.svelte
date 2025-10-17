<script lang="ts">
	import type { Project } from "$lib/types/Project";
	import { ExternalLinkIcon, Github } from "lucide-svelte";

	let { project } = $props<{
		project: Project;
	}>();
</script>

<article
	class="group flex flex-col relative bg-bg-card border border-border-medium
	hover:border-border-default transition-all duration-300 overflow-hidden"
>
	<!-- Image header -->
	<div class="relative h-48 overflow-hidden bg-dark">
		<img
			src={project.image}
			alt={project.title}
			class="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"
		></div>
	</div>

	<!-- Main content -->
	<div class="flex flex-1 flex-col p-6 gap-4">
		<h3 class="text-xl font-bold">
			{project.title}
		</h3>
		<h4 class="text-light font-bold">Description</h4>
		<p class="text-xs text-default leading-relaxed">
			{project.description}
		</p>

		<h4 class="text-light font-bold">Tech Stack</h4>
		<div class="flex flex-wrap gap-2">
			{#each project.technologies as tech}
				<span
					class="px-2 py-1 text-[10px] uppercase tracking-wider bg-bg-dark border border-border-default"
				>
					{tech}
				</span>
			{/each}
		</div>
	</div>

	<!-- Github and project links -->
	<div class="flex gap-3 p-6">
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
</article>
