<script lang="ts">
	import HamburgerButton from "./HamburgerButton.svelte";
	import Sidebar from "./Sidebar.svelte";
	import type { MenuOption } from "$lib/types/MenuOption";

	let menuOptions: MenuOption[] = [
		{
			name: "About",
			ref: "/",
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

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}
</script>

<nav
	class="relative h-12 max-w-2xl p-8 mx-auto flex flex-row items-center backdrop-blur-md z-49"
>
	<a
		class="font-[Satoshi-Bold] mr-auto tracking-wide text-bright text-md hover:cursor-pointer selection:"
		href="/"
	>
		<h1>Daniel Villavicencio</h1>
	</a>

	<!-- NavBar options desktop -->
	<ul class="flex flex-row gap-4 mx-2 justify-center content-center">
		{#each menuOptions as option}
			<li class="nav-link"><a href={option.ref}>{option.name}</a></li>
		{/each}
		<li class="block sm:hidden relative content-start">
			<HamburgerButton onclick={toggleSidebar} />
		</li>
	</ul>
</nav>

<!-- Mobile side bar -->
<Sidebar onclick={toggleSidebar} open={sidebarOpen} options={menuOptions} />
