<script lang="ts">
	import { FolderDotIcon, Mail, ArrowRight } from "lucide-svelte";
	import gsmt from "$lib/assets/gsmt.png";
	import protheon from "$lib/assets/Protheon.png";
	import dapProfiler from "$lib/assets/dap-profiler.png";

	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import type { Project } from "$lib/types/Project";
	import type { CoreTechnologies } from "$lib/types/CoreTechnologies";

	const coreTechnologies: CoreTechnologies[] = [
		{
			category: "Languages",
			technologies: ["Go", "Java", "Typescript", "Lua"],
		},
		{
			category: "Frameworks",
			technologies: ["Spring Boot", "Svelte", ".NET", "React"],
		},
		{
			category: "Tools & Infrastructure",
			technologies: [
				"Git",
				"MySQL",
				"PostgreSQL",
				"Redis",
				"RabbitMQ",
				"Docker",
			],
		},
	];

	const projects: Project[] = [
		{
			title: "Go Schema Migration Tool (Gsmt)",
			description:
				"GSMT is a lightweight embedded-schema and data migration library for Go. It helps you apply, track and validate schema and data changes in your database at runtime.",
			image: gsmt,
			technologies: ["Go", "SQL", "PostgreSQL"],
			githubUrl: "http://www.github.com/deahtstroke/gsmt",
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

	let staggerCounter: number = 0;
</script>

<main class="flex flex-col items-center gap-5 align-middle">
	<section
		class="relative w-full p-8 gap-4 flex flex-col items-center justify-center bg-linear-to-r from-purple-500 to-pink-500"
	>
		<!-- Hero banner -->
		<h1
			class="fly-in-item animate-in font-[Satoshi-Bold] text-center text-bright text-5xl"
			style="--delay: {staggerCounter++ * 50}ms"
		>
			Hello there, I'm Daniel
		</h1>
		<h3
			class="fly-in-item animate-in text-center text-bright text-md"
			style="--delay: {staggerCounter++ * 100}ms"
		>
			Building Scalable Distributed Backend Systems
		</h3>
		<p
			class="fly-in-item animate-in text-bright text-sm text-center"
			style="--delay: {staggerCounter++ * 100}ms"
		>
			I'm a Full-Stack Software Engineer that specializes in building
			distributed systems and building DevOps deployment pipelines.
		</p>

		<!-- Action buttons -->
		<div class="flex gap-3 justify-center pt-4 pb-2">
			<button
				aria-label="Connect button"
				style="--delay: {staggerCounter++ * 100}ms"
				class="fly-in-item animate-in
				group
				flex gap-2 px-2 py-1 border items-center rounded-sm text-bright border-bright sm:text-default sm:border-default
				hover:text-bright hover:border-bright transition-all duration-300 cursor-pointer"
			>
				<span class="text-sm">Connect</span>
				<Mail class="w-4 h-4" />
			</button>
			<button
				aria-label="Portfolio button"
				style="--delay: {staggerCounter++ * 100}ms"
				class="fly-in-item animate-in
				flex px-2 py-1 gap-2 border items-center rounded-sm text-bright border-bright sm:text-default sm:border-default
				hover:text-bright hover:border-bright transition-all duration-300 cursor-pointer"
			>
				<span class="text-sm">View Projects</span>
				<FolderDotIcon class="w-4 h-4" />
			</button>
		</div>
	</section>

	<!-- Core Technologies -->
	<section class="relative w-full px-8 py-4 flex flex-col gap-4">
		<h1
			class="animate-in fly-in-item text-xl text-bright text-center underline"
			style="--delay: {staggerCounter++ * 100}ms"
		>
			Core Technologies
		</h1>
		{#each coreTechnologies as tech}
			<h2 class="fly-right-item animate-right text-sm text-bright text-start">
				{tech.category}
			</h2>
			<div class="flex flex-row flex-wrap gap-2">
				{#each tech.technologies as elem}
					<div
						class="fly-right-item animate-right relative py-1 px-2 bg-bg-dark border border-border-default uppercase text-xs hover:bg-bg-default"
					>
						#{elem}
					</div>
				{/each}
			</div>
		{/each}
	</section>

	<!-- Featured Projects -->
	<section
		style="--delay: {staggerCounter++ * 100}ms"
		class="fly-in-item animate-in relative w-full px-8 py-4 flex flex-col items-center gap-4"
	>
		<h1 class="text-xl text-bright text-center underline">Featured Projects</h1>
		<p class="text-md text-center">
			These projects are on-going projects and actively maintained that I have
			been working on.
		</p>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>

	<!-- Learn more about me -->
	<section class="relative px-8">
		<div
			class="flex flex-col gap-4 p-4 items-center border border-border-default rounded-sm"
		>
			<h1 class="text-xl text-bright text-center font-bold">
				Learn more about my journey
			</h1>
			<p class="text-sm text-default text-center">
				Learn about my philosophy, career milestones, and what I'm currently
				focused on building
			</p>
			<div class="flex">
				<a
					href="/about"
					class="inline-flex group items-center gap-2 px-4 py-2 bg-bg-card text-default hover:bg-bg-dark border border-border-default rounded-md transition-all duration-150"
				>
					Read my story
					<ArrowRight class="w-4 h-4 group-hover:translate-x-2" />
				</a>
			</div>
		</div>
	</section>
</main>

<style>
	.fly-right-item {
		opacity: 0;
		transform: translateX(-50px);
	}

	.fly-right-item.animate-right {
		animation: flyRight 300ms ease-out forwards;
		animation-delay: var(--right-delay);
	}

	.fly-in-item {
		opacity: 0;
		transform: translateY(20px);
	}

	.fly-in-item.animate-in {
		animation: flyUp 300ms ease-out forwards;
		animation-delay: var(--delay);
	}

	@keyframes flyRight {
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes flyUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
