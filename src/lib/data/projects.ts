import type { Project } from "$lib/types/Project";

export const data: Project[] = [
	{
		title: "Go Schema Migration Tool (Gsmt)",
		description:
			"Lightweight embedded-schema and data migration library for Go. It helps you apply, track and validate schema and data changes in your database at runtime.",
		technologies: ["Go", "SQL", "PostgreSQL"],
		githubUrl: "http://www.github.com/deahtstroke/gsmt",
	},
	{
		title: "Verity Inside Helper",
		description:
			"Interactive website to provide instructional assitance to Destiny 2 players with the inside portion of the Verity encounter in Salvation's Edge. " +
			"",
		technologies: ["Typescript", "Svelte", "html", "css"],
		githubUrl: "https://www.github.com/deahtstroke/verity-inside-helper",
		websiteUrl: "https://verity-inside-helper.vercel.app/",
	},
	{
		title: "Protheon, Modular Mind",
		description:
			"Protheon is a distributed job orchestration system built in Go that coordinates workers across multiple machines to process large-scale data pipelines efficiently. It uses RabbitMQ for message brokering, supports real-time worker registration and heartbeats, and is designed to handle high-throughput workloads like streaming and processing large .jsonl.zst datasets",
		technologies: ["Go", "PostgreSQL", "RabbitMQ", "Docker"],
		githubUrl: "http://www.github.com/deahtstroke/Protheon",
	},
	{
		title: "Dap-Profiler.nvim",
		description:
			"Dap-Profiler.nvim is a lightweight Neovim plugin that enhances the nvim-dap (Debug Adapter Protocol) experience by allowing developers to create, organize and switch between debugging profiles effortlessly. It’s designed for developers who work across multiple projects, languages, or configurations and need a convenient way to manage DAP setups without constantly editing Lua tables or JSON configs.",
		technologies: ["Lua", "Neovim",],
		githubUrl: "http://www.github.com/deahtstroke/dap-profiler.nvim",
	},
]
