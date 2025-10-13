<script lang="ts">
	let { onclick } = $props<{
		open?: boolean;
		onclick?: () => void;
	}>();
</script>

<button
	{onclick}
	aria-label="hamburger menu"
	class="relative hover:cursor-pointer w-7 h-7 flex items-center justify-center transition-all duration-300"
>
	<svg
		class="w-6 h-6 transition-transform duration-500"
		viewBox="0 0 24 24"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
	>
		<path d="M3 6h18" />
		<path d="M3 12h18" />
		<path d="M3 18h18" />
	</svg>
</button>
