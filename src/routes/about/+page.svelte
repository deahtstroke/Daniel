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
			year: "June 2017",
			title: "Started Community College",
			description:
				"Went to Sierra College at Rocklin, CA. \nGraduated with a 3.74/4.00 overall GPA.",
		},
		{
			year: "January 2020",
			title: "Transferred to Sacramento State University",
			description:
				"Transfered from Sierra College to Sacramento State University. \nTook upper-division classes for Computer Science.",
		},
		{
			year: "June 2022",
			title: "First Software Development Job",
			description:
				"Started working for UNFI meanwhile I was finishing my studies.",
		},
		{
			year: "Dec 2022",
			title: "Graduated from Sacramento State",
			description:
				"Graduated with an overall 3.77/4.00 GPA from Sac-State with Cum Laude honors.",
		},
		{
			year: "Oct 2023",
			title: "UNFI layoffs",
			description:
				"UNFI held department-wide layoffs which directly affected my position.",
		},
		{
			year: "Oct 2023 - Present",
			title: "Career Advancement Period",
			description:
				"After layoffs happened I focused heavily on landing my next big opportunity and keeping my skills sharp through project-based learning and certifications.",
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

<main class="flex flex-col max-w-2xl mx-auto p-8 gap-10 sm:gap-18 md:gap-24">
	<section class="flex flex-col gap-2">
		<h1
			in:fadeFly={{ delay: fadeCount(), duration: 300, y: 20 }}
			class="text-bright text-4xl font-bold text-center"
		>
			Hi, I'm Daniel
		</h1>
		<p
			in:fadeFly={{ delay: fadeCount(), duration: 300, y: 20 }}
			class="text-sm text-center"
		>
			A software engineer passionate about building scalable systems and elegant
			solutions. I specialize in backend development, distributed systems, and
			turning complex problems into simple, maintainable, and testable code.
		</p>
	</section>
	<section class="flex flex-col items-center gap-6">
		<h2
			in:fadeFly={{ delay: fadeCount(), duration: 300, y: 20 }}
			class="text-2xl font-semibold text-bright text-center"
		>
			Philosophy
		</h2>
		<div class="space-y-2 border-l-4 border-border-default pl-4">
			<blockquote
				in:fadeFly={{ delay: fadeCount(), duration: 300, y: 20 }}
				class="text-sm"
			>
				I believe great software is built on three pillars: <span
					class="font-semibold text-bright">simplicity</span
				>,
				<span class="font-semibold text-bright">reliability</span>, and
				<span class="font-semibold text-bright">testability</span>. Code should
				be easy to understand, systems should be resilient, and technology
				should serve people's needs.
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
	<section class="flex flex-col gap-6 items-center">
		<h2
			in:fadeFly={{ delay: fadeCount(), duration: 300, y: 20 }}
			class="text-bright text-center text-2xl font-semibold"
		>
			Current Focus
		</h2>
		<div class="grid gap-2">
			{#each currentFocus as focus}
				<div
					in:fadeFly|global={{ delay: fadeCount(), duration: 300, y: 20 }}
					class="flex items-start gap-2 group"
				>
					<div
						class="mt-2.5 w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white/60 flex-shrink-0"
					></div>
					<p
						class="text-default text-sm group-hover:text-bright transition-colors"
					>
						{focus}
					</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Education + Certifications -->
	<section class="flex flex-col gap-6">
		<h2 class="text-2xl font-semibold text-bright text-center">
			Education & Certifications
		</h2>
		<div class="space-y-2">
			{#each educationsAndCerts as education}
				<div class="space-y-2 pb-6 border-b border-neutral-800 last:border-0">
					<div
						class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2"
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
	<section class="flex flex-col gap-6">
		<div class="p-8 space-y-2">
			<h2 class="text-xl font-semibold text-bright text-center">
				Let's Connect
			</h2>
			<p class="text-bright/60 text-sm leading-relaxed text-center">
				Interested in working together or just want to chat about tech? I'm
				always open to interesting conversations and new opportunities.
			</p>
			<div class="flex flex-col sm:flex-row sm:justify-center gap-2 pt-2">
				<a
					href="/contact"
					class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-bg-default border border-border-default text-bright hover:bg-bg-dark transition-colors"
				>
					<Mail class="h-4 w-4" />
					Contact Me
				</a>
				<a
					href="https://github.com/deahtstroke"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-bg-default border border-border-default text-bright hover:bg-bg-dark transition-colors"
				>
					<Github class="w-4 h-4" />
					View my work
				</a>
			</div>
		</div>
	</section>
</main>
