<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import type { Project } from "$lib/types/Project";
	import gsmt from "$lib/assets/gsmt.png";
	import verityHelper from "$lib/assets/verity-inside-helper.png";

	const projects: Project[] = [
		{
			title: "Go Schema Migration Tool (Gsmt)",
			description:
				"Lightweight embedded-schema and data migration library for Go. It helps you apply, track and validate schema and data changes in your database at runtime.",
			image: gsmt,
			technologies: ["Go", "SQL", "PostgreSQL"],
			githubUrl: "http://www.github.com/deahtstroke/gsmt",
		},
		{
			title: "Verity Inside Helper",
			description:
				"Web application to help Destiny 2 players with the inside portion of the Verity encounter in Salvation's Edge",
			image: verityHelper,
			technologies: ["Typescript", "Svelte", "HTML", "Vanilla CSS"],
			githubUrl: "https://www.github.com/deahtstroke/verity-inside-helper",
			websiteUrl: "https://verity-inside-helper.vercel.app/",
		},
	];
</script>

<section class="px-8 space-y-8">
	<h2
		class="text-2xl font-[Satoshi-Light] tracking-wider text-default uppercase border-b border-border-default pb-4"
	>
		Projects
	</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
