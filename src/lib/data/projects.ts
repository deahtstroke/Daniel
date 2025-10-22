import type { Project } from "$lib/types/Project";

export const data: Project[] = [
	{
		title: "Go Schema Migration Tool (Gsmt)",
		description:
			"Lightweight embedded-schema and data migration library for Go. It helps you apply, track and validate schema and data changes in your database at runtime.",
		technologies: ["Go", "PostgreSQL", "RDBMS"],
		githubUrl: "http://www.github.com/deahtstroke/gsmt",
	},
	{
		title: "Verity Inside Helper",
		description:
			"Interactive website to provide instructional assitance to Destiny 2 players with the inside portion of the Verity encounter in Salvation's Edge. " +
			"",
		technologies: ["Typescript", "Svelte", "html", "css", "vercel"],
		githubUrl: "https://www.github.com/deahtstroke/verity-inside-helper",
		websiteUrl: "https://verity-inside-helper.vercel.app/",
	},
	{
		title: "Protheon, Modular Mind",
		description:
			"Distributed job orchestration system built in Go that coordinates workers across multiple machines to process large-scale data pipelines efficiently.",
		technologies: ["Go", "PostgreSQL", "RabbitMQ", "Docker"],
		githubUrl: "http://www.github.com/deahtstroke/Protheon",
	},
	{
		title: "Dap-Profiler.nvim",
		description:
			"Dap-Profiler.nvim is a lightweight Neovim plugin that enhances the nvim-dap (Debug Adapter Protocol) experience by allowing developers to create, organize and switch between debugging profiles effortlessly.",
		technologies: ["Lua", "Neovim"],
		githubUrl: "http://www.github.com/deahtstroke/dap-profiler.nvim",
	},
	{
		title: "RivenBot Legacy",
		description: "Legacy monolithic version of Riven Bot Discord Bot using Java, Spring Webflux and MongoDB.",
		technologies: ["Java", "spring boot", "Mongodb", "Redis", "Gradle", "Docker", "Github Actions", "JUnit5", "Mockito"],
		githubUrl: "https://github.com/Riven-of-a-Thousand-Servers/rivenbot-legacy",
	},
	{
		title: "Duck Assert",
		description: "Small experimental mocking library to study Testify's mocking capabilities in Go.",
		technologies: ["Go", "Testing"],

		githubUrl: "https://github.com/deahtstroke/duck-assert",
	},
	{
		title: "PGCR Batch Processor",
		description: "Backend application that efficiently processes Post Game Carnage Reports using Spring Batch's processing architecture and parallelism.",
		technologies: ["Java", "Spring Boot", "PostgreSQL", "Grafana", "Loki", "Redis", "Docker", "Prometheus"],
		githubUrl: "https://github.com/deahtstroke/pgcr-batch-processor",
	},
	{
		title: "Chameleon Business Studio",
		description: "Scheduling web-application using Vendia's GraphQL event-based technology.",
		technologies: ["Java", "Typescript", "Spring Boot", "Angular", "Groovy", "Azure", "Spring Security", "Test Containers", "Wiremock"],
		githubUrl: "https://github.com/deahtstroke/chameleon-business-studio",
	},
	{
		title: "Riven of a Thousand Servers",
		description: "Microservice-based Discord bot that fetches analytics and statistics for Destiny 2 players through Discord",
		technologies: ["Go", "PostgreSQL", "RabbitMQ", "Discord", "Digital Ocean"],
		githubUrl: "https://github.com/Riven-of-a-Thousand-Servers",
	}
]
