<script lang="ts">
	interface Milestone {
		year: String;
		title: String;
	}
	const milestones: Milestone[] = [
		{
			year: "Jun 2017 - Dec 2019",
			title: "Started Community College at Sierra College",
		},
		{
			year: "Jan 2020 - Dec 2022",
			title: "Transfered from Sierra College to Sacramento State University",
		},
		{
			year: "Jun 2022 - Oct 2023",
			title: "Started working at UNFI",
		},
		{
			year: "Oct 2023 - Present",
			title: "Freelance Software Engineer",
		},
	];
</script>

<div
	class="flex flex-col px-8 py-4 sm:grid sm:grid-cols-[auto_1fr] gap-x-6 gap-y-8 items-center sm:items-start"
>
	<!-- About section -->
	<h2
		class="hidden sm:block vertical-writing font-[Satoshi-Regular] uppercase tracking-widest text-sm"
	>
		About Me
	</h2>
	<div class="flex flex-col gap-4 text-sm">
		<div class="flex flex-col gap-1 sm:hidden">
			<h2 class="text-lg font-[Satoshi-Bold]">About Me</h2>
			<hr class="opacity-25" />
		</div>
		<p>
			I’m a freelance software engineer based in Roseville with a deep passion
			for learning new technologies and building distributed systems. I’ve
			always been fascinated by how cloud infrastructure and scalable services
			come together to power modern applications. When I’m not online or buried
			in documentation, you’ll probably find me hanging out with friends and
			playing games — lately, Monster Hunter: Wilds has been my biggest time
			sink (for better or worse).
		</p>
		<p>
			My journey into software development began back in 2017, when I enrolled
			in community college without really knowing what I wanted to study. With
			each class I took, I found myself drawn deeper into computer science not
			just as a subject, but as a way of thinking. Fast-forward to university:
			during my senior year, I joined United Natural Foods (UNFI) as a Software
			Engineer I. Balancing a full-time job with a full-time course load was
			challenging, but it pushed me to grow quickly. I learned how to build REST
			APIs, monitor distributed systems, and deploy services to the cloud using
			CI/CD pipelines, among many other things.
		</p>
		<p>
			After the subsequent layoffs at UNFI, I didn’t slow down. Instead, I used
			that time to experiment with technologies that excited me. From reactive
			frameworks to event-driven architectures and advanced deployment
			workflows. This period of exploration has helped me sharpen my skills and
			deepen my understanding of how reliable, modern systems are built. Today,
			I’m focused on applying those lessons to create scalable, resilient
			backend systems and continuing to push myself to learn what’s next.
		</p>
	</div>
	<section class="max-w-2xl">
		<div
			class="flex flex-col px-8 py-4 sm:grid sm:grid-cols-[auto_1fr] gap-x-6 gap-y-8 items-center sm:items-start"
		>
			<!-- Milestones section -->
			<div class="flex flex-col gap-4 text-sm w-full">
				<div class="flex sm:hidden flex-col gap-1">
					<h2 class="text-lg font-[Satoshi-Bold]">Milestones</h2>
					<hr class="opacity-50" />
				</div>
				<ul class="flex flex-col gap-3">
					{#each milestones as milestone}
						<li class="grid grid-cols-[1fr_1fr] gap-1">
							<h4 class="font-[Satoshi-Bold] font-bright mr-auto">
								{milestone.year}
							</h4>
							<span>{milestone.title}</span>
						</li>
					{/each}
				</ul>
			</div>

			<h2
				class="hidden sm:block vertical-writing font-[Satoshi-Regular] uppercase tracking-widest text-sm"
			>
				Milestones
			</h2>
		</div>
	</section>
</div>
