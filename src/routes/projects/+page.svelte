<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import type { Project } from "$lib/types/Project";
	import gsmt from "$lib/assets/gsmt.png";
	import verityHelper from "$lib/assets/verity-inside-helper.png";
	import protheon from "$lib/assets/Protheon.png";
	import dapProfiler from "$lib/assets/dap-profiler.png";

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
				"Interactive website to provide instructional assitance to Destiny 2 players with the inside portion of the Verity encounter in Salvation's Edge. " +
				"",
			image: verityHelper,
			technologies: ["Typescript", "Svelte", "HTML", "Vanilla CSS"],
			githubUrl: "https://www.github.com/deahtstroke/verity-inside-helper",
			websiteUrl: "https://verity-inside-helper.vercel.app/",
		},
		{
			title: "Protheon, Modular Mind",
			description:
				"Protheon is a distributed job orchestration system built in Go that coordinates workers across multiple machines to process large-scale data pipelines efficiently. It uses RabbitMQ for message brokering, supports real-time worker registration and heartbeats, and is designed to handle high-throughput workloads like streaming and processing large .jsonl.zst datasets",
			image: protheon,
			technologies: ["Go", "PostgreSQL", "RabbitMQ", "TCP Sockets", "Docker"],
			githubUrl: "http://www.github.com/deahtstroke/Protheon",
		},
		{
			title: "Dap-Profiler.nvim",
			description:
				"Dap-Profiler.nvim is a lightweight Neovim plugin that enhances the nvim-dap (Debug Adapter Protocol) experience by allowing developers to create, organize and switch between debugging profiles effortlessly. It’s designed for developers who work across multiple projects, languages, or configurations and need a convenient way to manage DAP setups without constantly editing Lua tables or JSON configs.",
			image: dapProfiler,
			technologies: ["Lua", "Neovim", "DAP"],
			githubUrl: "http://www.github.com/deahtstroke/dap-profiler.nvim",
		},
	];
</script>

<section
	class="flex flex-col px-8 py-4 mx-auto align-middle items-center max-w-6xl gap-8"
>
	<div class="flex flex-col gap-1 w-full">
		<h2 class="text-lg font-[Satoshi-Bold]">Projects</h2>
		<hr class="opacity-50" />
	</div>
	<div class="grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
