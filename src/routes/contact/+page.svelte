<script lang="ts">
	import {
		CheckCircle2,
		Cloud,
		Code,
		Download,
		GithubIcon,
		LinkedinIcon,
		Mail,
		MapPin,
		Server,
		Timer,
	} from "lucide-svelte";
	import { fadeFly } from "$lib/transitions/transitions";

	let count: number = 0;
	let staggeredCount: (reset: boolean) => number = (reset) => {
		if (reset) {
			count = 0;
		}
		return count++ * 25;
	};

	type SubmissionStatus = "idle" | "submitting" | "success" | "error";

	let formData = $state<{
		name: string;
		email: string;
		subject: string;
		message: string;
	}>({ name: "", email: "", subject: "", message: "" });

	let errors = $state<Record<string, string>>({});
	let isSubmitting = $state<boolean>(false);
	let submitStatus = $state<SubmissionStatus>("idle");

	function validateForm(): boolean {
		const newErrors: Record<string, string> = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		}

		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters";
		}

		console.log(newErrors.message);

		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	}

	function clearError(field: string) {
		if (errors[field]) {
			const { [field]: _, ...rest } = errors;
			errors = rest;
		}
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		isSubmitting = true;

		await new Promise((resolve) => setTimeout(resolve, 1500));

		console.log(`Form submitted`, formData);
		submitStatus = "success";
		isSubmitting = false;

		setTimeout(() => {
			formData = {
				name: "",
				email: "",
				subject: "",
				message: "",
			};
			submitStatus = "idle";
		}, 3000);
	}
</script>

<main class="w-full px-8">
	<div
		class="max-w-4xl mx-auto flex flex-col items-center gap-8 sm:gap-16 md:gap-24"
	>
		<!-- Hero section -->
		<section
			class="relative flex flex-col gap-6 py-12 border-b border-neutral-800"
		>
			<h1
				in:fadeFly={{ delay: staggeredCount(false), duration: 300, y: 20 }}
				class="font-bold text-center text-bright text-5xl md:text-7xl"
			>
				Get In Touch
			</h1>
			<p
				in:fadeFly={{ delay: staggeredCount(false), duration: 300, y: 20 }}
				class="text-lg text-default text-center"
			>
				Have a project in mind or want to collaborate? Send me an email and I'll
				get back to you as soon as possible
			</p>
		</section>

		<div
			class="w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-10 gap-y-8"
		>
			<!-- Form Submission -->
			<section class="flex flex-col gap-6">
				<div class="flex flex-col gap-2">
					<h1
						in:fadeFly={{ delay: staggeredCount(false), duration: 300, y: 20 }}
						class="text-lg text-bright text-center font-semibold"
					>
						Send Me a Quick Message
					</h1>
					<p
						in:fadeFly={{ delay: staggeredCount(false), duration: 300, y: 20 }}
						class="text-sm text-center"
					>
						If you have a quick inquiry to talk about, please fill the form
						below.
					</p>
				</div>

				<form onsubmit={handleSubmit} novalidate class="flex flex-col gap-6">
					<!-- Name -->
					<div
						in:fadeFly={{ delay: staggeredCount(false), duration: 300, y: 20 }}
						class="flex flex-col gap-2"
					>
						<label for="name" class="block text-sm text-default">
							Name <span class="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="name"
							autocapitalize="on"
							bind:value={formData.name}
							oninput={() => clearError("name")}
							placeholder="John Doe"
							class="w-full px-4 py-3 bg-bg-dark border border-border-default
					rounded text-bright focus:outline-none focus:border-cyan-500 transition-colors
					{errors.name ? 'border-red-500' : ''}"
						/>
						{#if errors.name}
							<p class="text-sm text-red-500">{errors.name}</p>
						{/if}
					</div>
					<!-- Email -->
					<div
						in:fadeFly={{ delay: staggeredCount(false), duration: 300, y: 20 }}
						class="flex flex-col gap-2"
					>
						<label for="email" class="block text-sm text-default">
							Email <span class="text-red-500">*</span>
						</label>
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							oninput={() => clearError("email")}
							autocomplete="email"
							placeholder="johndoe@example.com"
							class="w-full px-4 py-3 bg-bg-dark border border-border-default
							rounded text-bright focus:outline-none focus:border-cyan-500 transition-colors
							{errors.email ? 'border-red-500' : ''}"
						/>
						{#if errors.email}
							<p class="text-sm text-red-500">{errors.email}</p>
						{/if}
					</div>

					<!-- Subject -->
					<div
						in:fadeFly={{ delay: staggeredCount(false), duration: 300, y: 20 }}
						class="flex flex-col gap-2"
					>
						<label for="subject" class="block text-sm text-default">
							Subject <span class="text-red-500">*</span>
						</label>
						<select
							id="subject"
							bind:value={formData.subject}
							oninput={() => clearError("subject")}
							placeholder="johndoe@example.com"
							class="w-full px-4 py-3 bg-bg-dark border border-border-default
					rounded text-bright focus:outline-none focus:border-cyan-500 transition-colors
					{errors.subject ? 'border-red-500' : ''}"
						>
							<option value="" class="text-default">Select a Subject</option>
							<option value="General Inquiry">General Inquiry</option>
							<option value="Project Collaboration"
								>Project Collaboration</option
							>
							<option value="Job Opportunity">Job Opportunity</option>
							<option value="Freelance Work">Freelance Work</option>
							<option value="Bug Report">Bug Report</option>
							<option value="Other">Other</option>
						</select>
						{#if errors.subject}
							<p class="text-sm text-red-500">{errors.subject}</p>
						{/if}
					</div>
					<!-- Message body -->
					<div
						in:fadeFly={{ delay: staggeredCount(false), duration: 300, y: 20 }}
						class="flex flex-col gap-2"
					>
						<label for="message" class="block text-sm text-default">
							Message <span class="text-red-500">*</span>
						</label>
						<textarea
							id="message"
							bind:value={formData.message}
							oninput={() => clearError("message")}
							rows="8"
							class="w-full px-4 py-3 bg-bg-dark border border-border-default text-white placeholder-neutral-500
					rounded focus:outline-none focus:border-cyan-500 transition-colors resize-none
					{errors.message ? 'border-red-500' : ''}"
							placeholder="Tell me about your project..."
						></textarea>
						{#if errors.message}
							<p class="text-sm text-red-500">{errors.message}</p>
						{/if}
					</div>

					<!-- Submission -->
					<div
						in:fadeFly={{ delay: staggeredCount(true), duration: 300, y: 20 }}
						class="flex flex-col gap-2"
					>
						<button
							aria-label="Message submission button"
							type="submit"
							class="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-bright
					rounded font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
							disabled={isSubmitting}
						>
							{#if isSubmitting}
								<div
									class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
								></div>
								<span>Send Message</span>
							{:else if submitStatus === "success"}
								<CheckCircle2 class="w-5 h-5" />
								<span>Message Sent!</span>
							{:else}
								<span>Send Message</span>
							{/if}
						</button>

						{#if submitStatus === "success"}
							<p class="text-sm text-green-500">
								Thanks for reaching out! I'll get back to you soon.
							</p>
						{:else if submitStatus === "error"}
							<p class="text-sm text-red-500">
								Oops! There was an error sending your message, please try again
								later.
							</p>
						{/if}
					</div>
				</form>
			</section>

			<!-- Sidebar -->
			<div class="flex flex-col items-center gap-6">
				<!-- Contact Information -->
				<section
					in:fadeFly={{ delay: staggeredCount(false), duration: 300, y: 20 }}
					class="border border-border-default rounded w-full p-4"
				>
					<h3 class="text-lg font-semibold text-bright pb-2 text-center">
						Contact Information
					</h3>
					<div class="flex flex-col gap-2 text-sm">
						<a
							href="mailto:dvm3099@pm.me"
							class="flex items-start gap-3 text-default hover:text-cyan-600 transition-colors group"
						>
							<Mail class="w-5 h-5 flex-shrink-0" />
							<div>
								<p class="text-xs text-default/40">Email</p>
								<p class="group-hover: underline">dvm3099@pm.me</p>
							</div>
						</a>
						<div class="flex items-start gap-3 text-default">
							<MapPin class="w-5 h-5 flex-shrink-0" />
							<div>
								<p class="text-xs text-default/40">Location</p>
								<p>Roseville, CA</p>
								<p>(Available for remote work)</p>
							</div>
						</div>
						<div class="flex items-start gap-3 text-default/">
							<Timer class="w-5 h-5 flex-shrink-0" />
							<div>
								<p class="text-xs text-default/40">Timezone</p>
								<p>PST (UTC-7)</p>
							</div>
						</div>
					</div>
				</section>

				<!-- Socials -->
				<section
					in:fadeFly={{ delay: staggeredCount(false), duration: 300, y: 20 }}
					class="border border-border-default w-full rounded p-4"
				>
					<h3 class="text-lg font-semibold text-bright pb-2 text-center">
						Socials
					</h3>
					<div class="flex flex-col gap-2">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.github.com/deahtstroke"
							class="group text-default hover:text-cyan-600 transition-colors"
						>
							<div class="flex items-start gap-3">
								<GithubIcon class="w-5 h-5 flex-shrink-0" />
								<p class="text-sm">GitHub</p>
							</div>
						</a>
						<a
							href="https://www.linkedin.com/in/danielvillamena"
							target="_blank"
							rel="noopener noreferrer"
							class="group text-default hover:text-cyan-600 transition-colors"
						>
							<div class="flex items-start gap-3">
								<LinkedinIcon class="w-5 h-5 flex-shrink-0" />
								<p class="text-sm">LinkedIn</p>
							</div>
						</a>
					</div>
				</section>

				<!-- Download Resume -->
				<section
					in:fadeFly={{ delay: staggeredCount(false), duration: 300, y: 20 }}
					class="group flex items-center w-full px-6 py-3 border border-border-default rounded
					hover:border-cyan-600 transition-colors"
				>
					<a
						href="/resume.pdf"
						download
						class="m-auto text-default group-hover:text-cyan-600 transition-colors"
						aria-label="download resume link"
					>
						<div class="flex flex-start gap-3">
							<Download class="h-5 w-5" />
							Download Resume
						</div>
					</a>
				</section>

				<!-- Project Interests -->
				<section
					in:fadeFly={{ delay: staggeredCount(false), duration: 300, y: 20 }}
					class="border border-border-default p-4 w-full rounded"
				>
					<h3 class="text-lg text-bright font-semibold text-center pb-2">
						Project Interests
					</h3>
					<div class="flex flex-col gap-2">
						<div class="flex flex-start gap-3 text-default">
							<Server class="w-5 h-5 text-cyan-500 flex-shrink-0" />
							<span class="text-sm">Backend Systems</span>
						</div>
						<div class="flex flex-start gap-3 text-default">
							<Cloud class="w-5 h-5 text-cyan-500 flex-shrink-0" />
							<span class="text-sm">Cloud Systems</span>
						</div>
						<div class="flex flex-start gap-3 text-default">
							<Code class="w-5 h-5 text-cyan-500 flex-shrink-0" />
							<span class="text-sm">DevOps & CI/CD</span>
						</div>
					</div>
				</section>

				<!-- Availability Status -->
				<section
					in:fadeFly={{ delay: staggeredCount(false), duration: 300, y: 20 }}
					class="border border-border-default rounded w-full p-4"
				>
					<h3 class="text-lg font-semibold text-center text-bright pb-2">
						Availability
					</h3>
					<div class="flex flex-col gap-2">
						<div class="flex items-center gap-3">
							<div class="w-2 h-2 bg-green-500 rounded-full"></div>
							<span class="text-sm text-default">Open to new projects</span>
						</div>
						<div class="flex items-center gap-3">
							<div class="w-2 h-2 bg-green-500 rounded-full"></div>
							<span class="text-sm text-default"
								>Response time: 24-48 hours</span
							>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</main>
