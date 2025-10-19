<script lang="ts">
	import { CheckCircle2 } from "lucide-svelte";

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

<main class="w-full items-center mb-20">
	<div class="max-w-6xl mx-auto flex flex-col items-center sm:gap-18 md:gap-24">
		<!-- Hero section -->
		<section
			class="relative flex flex-col gap-2 py-12 px-8 border-b border-neutral-800"
		>
			<h1 class="font-bold text-center text-bright text-5xl md:text-7xl">
				Get In Touch
			</h1>
			<p class="text-lg text-default text-center">
				Have a project in mind or want to collabroate? Send me a message and
				I'll get back to you as soon as possible!
			</p>
		</section>

		<!-- Form Submission -->
		<section
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full px-8 py-12"
		>
			<form onsubmit={handleSubmit} novalidate class="flex flex-col gap-2">
				<!-- Name -->
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
					text-bright focus:outline-none focus:border-cyan-500 transition-colors
					{errors.name ? 'border-red-500' : ''}"
				/>
				{#if errors.name}
					<p class="text-sm text-red-500">{errors.name}</p>
				{/if}
				<!-- Email -->
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
					text-bright focus:outline-none focus:border-cyan-500 transition-colors
					{errors.email ? 'border-red-500' : ''}"
				/>
				{#if errors.email}
					<p class="text-sm text-red-500">{errors.email}</p>
				{/if}
				<!-- Subject -->
				<label for="subject" class="block text-sm text-default">
					Subject <span class="text-red-500">*</span>
				</label>
				<select
					id="subject"
					bind:value={formData.subject}
					oninput={() => clearError("subject")}
					placeholder="johndoe@example.com"
					class="w-full px-4 py-3 bg-bg-dark border border-border-default
					text-bright focus:outline-none focus:border-cyan-500 transition-colors
					{errors.subject ? 'border-red-500' : ''}"
				>
					<option value="" class="text-default">Select a Subject</option>
					<option value="General Inquiry">General Inquiry</option>
					<option value="Project Collaboration">Project Collaboration</option>
					<option value="Job Opportunity">Job Opportunity</option>
					<option value="Freelance Work">Freelance Work</option>
					<option value="Bug Report">Bug Report</option>
					<option value="Other">Other</option>
				</select>
				{#if errors.subject}
					<p class="text-sm text-red-500">{errors.subject}</p>
				{/if}
				<!-- Message body -->
				<label for="message" class="block text-sm font-medium text-neutral-300">
					Message <span class="text-red-500">*</span>
				</label>
				<textarea
					id="message"
					bind:value={formData.message}
					oninput={() => clearError("message")}
					rows="6"
					class="w-full px-4 py-3 bg-bg-dark border border-border-default text-white placeholder-neutral-500
					focus:outline-none focus:border-cyan-500 transition-colors resize-none
					{errors.message ? 'border-red-500' : ''}"
					placeholder="Tell me about your project..."
				></textarea>
				{#if errors.message}
					<p class="text-sm text-red-500">{errors.message}</p>
				{/if}
				<!-- Submission -->
				<button
					aria-label="Message submission button"
					type="submit"
					class="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-bright
					font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
			</form>
		</section>
	</div>
</main>
