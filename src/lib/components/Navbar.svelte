<script lang="ts">
	import HamburgerButton from "./HamburgerButton.svelte";
	import Sidebar from "./Sidebar.svelte";
	import type { MenuOption } from "$lib/types/MenuOption";

	let menuOptions: MenuOption[] = [
		{
			name: "About",
			ref: "#about",
		},
		{
			name: "Projects",
			ref: "#projects",
		},
		{
			name: "Contact",
			ref: "Contact",
		},
		{
			name: "Source",
			ref: "#source",
		},
	];

	let sidebarOpen: boolean = $state<boolean>(false);
</script>

<nav
	class="relative outline-light h-12 flex flex-row max-w-2xl first: py-2 backdrop-blur-md mx-auto content-center justify-center z-49"
>
	<h1
		class="font-satoshi-bold hover:cursor-pointer mr-auto tracking-wider content-center px-3 text-sm underline"
	>
		Daniel Villavicencio
	</h1>

	<!-- NavBar options desktop -->
	<ul class="flex flex-row gap-4 mx-2">
		{#each menuOptions as option}
			<li class="nav-link"><a href={option.ref}>{option.name}</a></li>
		{/each}
		<li class="block sm:hidden relative">
			<HamburgerButton onclick={() => (sidebarOpen = !sidebarOpen)} />
		</li>
	</ul>
</nav>

<!-- Mobile side bar -->
<Sidebar
	onclick={() => (sidebarOpen = !sidebarOpen)}
	open={sidebarOpen}
	options={menuOptions}
/>
