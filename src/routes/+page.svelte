<script lang="ts">
	import { fadeFly } from "$lib/transitions/transitions";
	import { FolderDotIcon, Mail, ArrowRight } from "lucide-svelte";
	import gsmt from "$lib/assets/gsmt.png";
	import protheon from "$lib/assets/Protheon.png";
	import dapProfiler from "$lib/assets/dap-profiler.png";

	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import type { Project } from "$lib/types/Project";
	import type { CoreTechnologies } from "$lib/types/CoreTechnologies";

	let count: number = 0;
	let staggerFunc = (reset: boolean): number => {
		if (reset) {
			count = 0;
		}
		return count++ * 50;
	};

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
</script>

<main class="flex flex-col items-center gap-10 sm:gap-18 md:gap-24">
	<!-- Hero banner -->
	<section
		class="relative w-full px-8 py-12 bg-linear-to-br from-slate-700 via-blue-700 to-cyan-600 animate-gradient-shift"
	>
		<div
			class="gap-6 max-w-6xl m-auto py-8 flex flex-col items-center justify-center"
		>
			<h1
				in:fadeFly|global={{ delay: staggerFunc(false), duration: 300, y: 20 }}
				class="font-bold text-center text-bright text-5xl md:text-7xl"
			>
				Daniel Villavicencio
			</h1>
			<p
				in:fadeFly|global={{ delay: staggerFunc(false), duration: 300, y: 20 }}
				class="text-xl md:text-2xl text-default font-medium tracking-wide"
			>
				Software Engineer
			</p>
			<h2
				in:fadeFly|global={{ delay: staggerFunc(false), duration: 300, y: 20 }}
				class="text-center text-bright text-md"
			>
				Specializing in distributed systems, backend architecture, and DevOps
				automation.
			</h2>

			<!-- Action buttons -->
			<div class="flex gap-2 justify-center pt-4 pb-2">
				<a
					href="/contact"
					in:fadeFly|global={{
						delay: staggerFunc(false),
						duration: 300,
						y: 20,
					}}
					aria-label="Connect button"
					class="group
				flex gap-2 px-6 py-3 border items-center text-bright border-bright rounded lg:text-default lg:border-default
				hover:text-bright hover:border-bright transition-all duration-300 cursor-pointer"
				>
					<span class="text-sm">Connect</span>
					<Mail class="w-4 h-4" />
				</a>
				<a
					href="/projects"
					aria-label="Portfolio button"
					in:fadeFly|global={{
						delay: staggerFunc(false),
						duration: 300,
						y: 20,
					}}
					class="
				flex px-6 py-3 gap-2 border items-center text-bright border-bright rounded lg:text-default lg:border-default
				hover:text-bright hover:border-bright transition-all duration-300 cursor-pointer"
				>
					<span class="text-sm">My Projects</span>
					<FolderDotIcon class="w-4 h-4" />
				</a>
			</div>
		</div>
	</section>

	<!-- Core Technologies -->
	<section class="relative max-w-6xl px-8 py-4 flex flex-col gap-6">
		<h2
			in:fadeFly={{ delay: staggerFunc(true), duration: 300, y: 20 }}
			class="text-2xl text-bright text-center font-semibold"
		>
			Core Technologies
		</h2>
		{#each coreTechnologies as tech}
			<h3
				in:fadeFly|global={{ delay: staggerFunc(true), duration: 150, y: 20 }}
				class="font-semibold text-lg text-default text-center"
			>
				{tech.category}
			</h3>
			<div class="flex flex-row flex-wrap justify-center gap-2">
				{#each tech.technologies as elem}
					<div
						in:fadeFly|global={{
							delay: staggerFunc(false),
							duration: 200,
							y: 20,
						}}
						class="relative py-1 px-2 bg-bg-dark border border-border-default uppercase text-xs hover:bg-bg-default"
					>
						{elem}
					</div>
				{/each}
			</div>
		{/each}
	</section>

	<!-- Featured Projects -->
	<section
		in:fadeFly={{ delay: staggerFunc(true), duration: 300 }}
		class="relative max-w-6xl px-8 py-4 flex flex-col items-center gap-6"
	>
		<h2 class="text-2xl text-bright text-center font-semibold">
			Featured Projects
		</h2>
		<p class="text-sm text-center">
			These are projects I actively maintain and/or am currently working on
		</p>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>

	<!-- Learn more about me -->
	<section
		in:fadeFly={{ delay: staggerFunc(true), duration: 300, y: 20 }}
		class="relative px-8"
	>
		<div class="flex flex-col gap-6 p-4 items-center">
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
					class="inline-flex group items-center gap-2 px-4 py-2 bg-bg-card text-default hover:bg-bg-dark border border-border-default transition-all duration-150"
				>
					Read my story
					<ArrowRight
						class="w-4 h-4 group-hover:translate-x-2 transition-all 300"
					/>
				</a>
			</div>
		</div>
	</section>
</main>

<style>
	@keyframes gradient-shift {
		0% {
			background-position: 0% 0%;
			background-size: 300% 300%;
		}

		25% {
			background-position: 100% 0%;
			background-size: 300% 300%;
		}
		50% {
			background-position: 100% 100%;
			background-size: 300% 300%;
		}

		75% {
			background-position: 0% 100%;
			background-size: 300% 300%;
		}
		100% {
			background-position: 0% 0%;
			background-size: 300% 300%;
		}
	}
	.animate-gradient-shift {
		animation: gradient-shift 8s ease-in-out infinite;
	}
</style>
