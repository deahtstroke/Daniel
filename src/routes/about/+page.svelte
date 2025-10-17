<script lang="ts">
	import DotMilestoneTimeline from "$lib/components/DotMilestoneTimeline.svelte";
	import type { Milestone } from "$lib/types/Milestone";
	import type { Education } from "$lib/types/Education";

	import { Github, Mail } from "lucide-svelte";
	import { fadeFly } from "$lib/transitions/transitions";

	let count: number = 0;

	let fadeCount = (): number => {
		return count++ * 25;
	};

	const milestones: Milestone[] = [
		{
			year: "Jun 2017",
			title: "Started Community College",
			description: "Started Community College at Sierra College",
		},
		{
			year: "Jan 2020",
			title: "Transferred to Sacramento State",
			description:
				"Transfered from Sierra College to Sacramento State University",
		},
		{
			year: "Jun 2022",
			title: "First Software Development Job",
			description:
				"Started working for UNFI meanwhile I was finishing my studies",
		},
		{
			year: "Oct 2023 - Present",
			title: "Freelancing",
			description: "Started working as a freelancer",
		},
	];

	const currentFocus: string[] = [
		"Building distributed systems with Go",
		"Exploring exciting technologies",
		"Contributing to open source projects",
		"Learning Rust for systems programming",
	];

	const educationsAndCerts: Education[] = [
		{
			degree: "B.S. Computer Science",
			institution: "California State University, Sacramento",
			year: "2020 - 2022",
			details: "GPA: 3.77/4.00",
		},
		{
			degree: "AWS Certified Cloud Practitioner",
			institution: "Amazon Web Services",
			year: "2025",
			details: "Foundational cloud certification for AWS",
		},
	];
</script>

<main class="flex flex-col mx-auto p-8 gap-4 sm:gap-8">
	<section class="flex flex-col gap-2">
		<h1
			in:fadeFly={{ delay: fadeCount(), duration: 300, x: 20 }}
			class="text-bright text-4xl font-bold md:text-center"
		>
			Hi, I'm Daniel
		</h1>
		<p
			in:fadeFly={{ delay: fadeCount(), duration: 300, y: 20 }}
			class="md:text-center"
		>
			A software engineer passionate about building scalable systems and elegant
			solutions. I specialize in backend development, distributed systems, and
			turning complex problems into simple, maintainable, and testable code.
		</p>
	</section>
	<section class="flex flex-col gap-4">
		<h2
			in:fadeFly={{ delay: fadeCount(), duration: 300, x: 20 }}
			class="text-2xl font-semibold text-bright"
		>
			Philosophy
		</h2>
		<div class="space-y-4 border-l-4 border-border-default pl-4">
			<blockquote
				in:fadeFly={{ delay: fadeCount(), duration: 300, y: 20 }}
				class="text-sm"
			>
				I believe great software is built on three pillars: simplicity,
				reliability, and testability. Code should be easy to understand, systems
				should be resilient, and technology should serve people's needs.
			</blockquote>
			<blockquote
				in:fadeFly={{ delay: fadeCount(), duration: 300, y: 20 }}
				class="text-sm"
			>
				I approach every problem with curiosity and pragmatism, always asking:
				"What's the simplest solution that could work?" I value clean
				architecture, thoughtful design, and continuous learning.
			</blockquote>
		</div>
	</section>
	<!-- Milestones -->
	<DotMilestoneTimeline
		milestones={[...milestones]}
		incrementFunc={fadeCount}
	/>

	<!-- Current Focus -->
	<section class="flex flex-col gap-4">
		<h2
			in:fadeFly={{ delay: fadeCount(), duration: 300, x: 20 }}
			class="text-bright text-2xl font-semibold"
		>
			Current Focus
		</h2>
		<div class="grid gap-3">
			{#each currentFocus as focus}
				<div class="flex items-start gap-3 group">
					<div
						class="mt-2.5 w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white/60 flex-shrink-0"
					></div>
					<p class="text-default group-hover:text-bright transition-colors">
						{focus}
					</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Education + Certifications -->
	<section class="flex flex-col gap-4">
		<h2 class="text-2xl font-semibold text-bright">
			Education & Certifications
		</h2>
		<div class="space-y-6">
			{#each educationsAndCerts as education}
				<div class="space-y-2 pb-6 border-b border-neutral-800 last:border-0">
					<div
						class="flex flex-col md:flex-row md:items-baseline md:justify-between agap-2"
					>
						<h3 class="text-lg font-medium text-bright">{education.degree}</h3>
						<span class="text-sm text-bright/40">{education.year}</span>
					</div>
					<p class="text-sm text-bright/50">{education.institution}</p>
					<p class="text-sm text-bright/60">{education.details}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- CTA -->
	<section class="flex flex-col gap-4">
		<div
			class="bg-bg-dark border border-border-default rounded-lg p-8 space-y-4"
		>
			<h2 class="text-xl font-semibold text-bright">Let's Connect</h2>
			<p class="text-bright/60 text-sm leading-relaxed">
				Interested in working together or just want to chat about tech? I'm
				always open to interesting conversations and new opportunities.
			</p>
			<div class="flex flex-col sm:flex-row gap-3 pt-2">
				<a
					href="/contact"
					class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-bright text-neutral-900 rounded hover:bg-bright/90 transition-colors"
				>
					<Mail class="h-4 w-4" />
					Contact Me
				</a>
				<a
					href="https://github.com/deahtstroke"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2 px-6 py-2 bg-bg-default border border-border-default text-bright rounded hover:bg-bg-dark transition-colors"
				>
					<Github class="w-4 h-4" />
					View my work
				</a>
			</div>
		</div>
	</section>
</main>
