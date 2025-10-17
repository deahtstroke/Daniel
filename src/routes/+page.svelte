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

<main class="flex flex-col items-center gap-5 align-middle">
	<!-- Hero banner -->
	<section
		class="relative w-full p-8 bg-linear-to-r from-purple-500 to-pink-500"
	>
		<div
			class="gap-4 max-w-3xl m-auto flex flex-col items-center justify-center"
		>
			<h1
				in:fadeFly|global={{ delay: staggerFunc(false), duration: 300, x: 20 }}
				class="font-[Satoshi-Bold] text-center text-bright text-5xl"
			>
				Hello there, I'm Daniel
			</h1>
			<h2
				in:fadeFly|global={{ delay: staggerFunc(false), duration: 300, y: 20 }}
				class="text-center text-bright text-md"
			>
				Building Scalable Distributed Backend Systems
			</h2>
			<p
				in:fadeFly|global={{ delay: staggerFunc(false), duration: 300, y: 20 }}
				class="text-bright text-sm text-center"
			>
				I'm a Full-Stack Software Engineer that specializes in building
				distributed systems and building DevOps deployment pipelines.
			</p>

			<!-- Action buttons -->
			<div class="flex gap-3 justify-center pt-4 pb-2">
				<button
					in:fadeFly|global={{
						delay: staggerFunc(false),
						duration: 300,
						y: 20,
					}}
					aria-label="Connect button"
					class="group
				flex gap-2 px-2 py-1 border items-center rounded-sm text-bright border-bright lg:text-default lg:border-default
				hover:text-bright hover:border-bright transition-all duration-300 cursor-pointer"
				>
					<span class="text-sm">Connect</span>
					<Mail class="w-4 h-4" />
				</button>
				<button
					aria-label="Portfolio button"
					in:fadeFly|global={{
						delay: staggerFunc(false),
						duration: 300,
						y: 20,
					}}
					class="
				flex px-2 py-1 gap-2 border items-center rounded-sm text-bright border-bright lg:text-default lg:border-default
				hover:text-bright hover:border-bright transition-all duration-300 cursor-pointer"
				>
					<span class="text-sm">View Projects</span>
					<FolderDotIcon class="w-4 h-4" />
				</button>
			</div>
		</div>
	</section>

	<!-- Core Technologies -->
	<section class="relative max-w-4xl px-8 py-4 flex flex-col gap-4">
		<h2
			in:fadeFly={{ delay: staggerFunc(true), duration: 300, x: 20 }}
			class="text-2xl text-bright text-center font-semibold"
		>
			Core Technologies
		</h2>
		{#each coreTechnologies as tech}
			<h3
				in:fadeFly|global={{ delay: staggerFunc(true), duration: 150, x: 20 }}
				class="font-semibold text-lg text-default text-start md:text-center"
			>
				{tech.category}
			</h3>
			<div
				class="flex flex-row flex-wrap justify-start md:justify-center gap-2"
			>
				{#each tech.technologies as elem}
					<div
						in:fadeFly|global={{
							delay: staggerFunc(false),
							duration: 200,
							x: 20,
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
		class="relative max-w-6xl px-8 py-4 flex flex-col items-center gap-4"
	>
		<h2 class="text-2xl text-bright text-center font-semibold">
			Featured Projects
		</h2>
		<p class="text-sm text-center">
			These are projects I actively maintain and/or am currently working on
		</p>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>

	<!-- Learn more about me -->
	<section
		in:fadeFly={{ delay: staggerFunc(true), duration: 300, x: 20 }}
		class="relative px-8"
	>
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
