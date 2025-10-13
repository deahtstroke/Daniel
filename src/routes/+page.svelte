<script lang="ts">
	import TechPulseButton from "$lib/components/TechPulseButton.svelte";
</script>

<main class="flex flex-col items-center align-middle">
	<section
		class="w-full h-40 px-8 py-4 flex flex-row items-center justify-center bg-linear-to-r from-purple-500 to-pink-500"
	>
		<TechPulseButton label="My Portfolio!" />
		<!-- <div class="grid grid-cols-[1fr_1fr]"> -->
		<!-- 	<TechPulseButton label="Check out my portfolio!" /> -->
		<!-- </div> -->
	</section>

	<section class="px-8 py-4">
		<div class="bg-button-default border-[1px] border-button-border p-2">
			<h1 class="text-center">
				Hello, I'm a backend engineer based in California!
			</h1>
		</div>
	</section>
	<section
		class="grid grid-cols[1r] sm:grid-cols-[auto_1fr] gap-x-2 gap-y-8 px-8 py-4 items-start"
	>
		<!-- Hello section -->
		<h2
			class="hidden sm:block vertical-writing font-[Satoshi-Light] p-0 uppercase tracking-widest text-xs"
		>
			// Hello
		</h2>
		<div class="flex flex-col gap-1 items-start sm:items-center">
			<h1 class="font-[Satoshi-Bold] content-start text-4xl">
				Daniel Villavicencio
			</h1>
			<h4 class="font-[Satoshi-light] text-sm">
				Backend Engineer (With good taste in UI)
			</h4>
		</div>

		<!-- About section -->
		<h2
			class="hidden sm:block vertical-writing font-[Satoshi-Light] uppercase tracking-widest text-xs"
		>
			// About Me
		</h2>
		<div class="flex flex-col gap-4 text-sm">
			<h2 class="block sm:hidden hover:text-bright text-sm underline">
				About me
			</h2>
			<p>
				Daniel is a Freelance Backend Engineer based in Roseville, California
				with a passion for learning new technologies and distributed systems. He
				has a knack for all things that involve Cloud Systems and Distributed
				Services. When not online or reading documentation he loves hanging out
				with his friends playing online games, his most recent time investment
				(or waste) has been Monster Hunter: Wilds.
			</p>
			<p>
				Daniel's journey on Software Development began on 2017 when he enrolled
				at Community College having no idea that he actually liked what he was
				studying. With each class he took ,the more he realized that he actually
				liked Computer Science as a discipline. Fast-forward to University, in
				his Senior year he began working United Natural Foods (UNFI) a Software
				Engineer 1, balancing both a full-time career and full-time college
				courseload, he quickly made himself acquainted with technical topics
				such as building REST APIs, monitoring distributed systems, Cloud
				Deployments via CI/CD pipelines, among other topics.
			</p>
			<p>
				Undeterred by the subsequent layoffs at UNFI, he began to experiment
				with a lot of technologies he found interesting like CI/CD pipelines,
				Reactive Frameworks, and event-driven programming.
			</p>
		</div>
	</section>
</main>
