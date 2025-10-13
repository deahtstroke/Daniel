<script lang="ts">
	let { label } = $props<{
		label: string;
	}>();
</script>

<div class="flex flex-row">
	<button
		aria-label="{label} button"
		class="relative overflow-hidden px-2 py-1 rounded-sm border-1 border-[secondary-button-border] bg-[#336e41] text-[white]"
	>
		<span class="relative z-10">{label}</span>
		<span class="absolute inset-0 border animate-pulse blur-md"></span>
		<span
			class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-sheen"
		></span>
	</button>
</div>
