<script lang="ts">
	import HamburgerButton from "./HamburgerButton.svelte";
	import Sidebar from "./Sidebar.svelte";
	import { User, Briefcase, Mail, Github, Home } from "lucide-svelte";

	import type { MenuOption } from "$lib/types/MenuOption";

	let menuOptions: MenuOption[] = [
		{
			name: "Home",
			desc: "Go back home",
			ref: "/",
			icon: Home,
		},
		{
			name: "About",
			desc: "Learn more",
			ref: "/about",
			icon: User,
		},
		{
			name: "Projects",
			desc: "View work",
			ref: "/projects",
			icon: Briefcase,
		},
		{
			name: "Contact",
			desc: "Get in touch",
			ref: "Contact",
			icon: Mail,
		},
		{
			name: "Source",
			desc: "View code",
			ref: "#source",
			icon: Github,
		},
	];

	let sidebarOpen: boolean = $state<boolean>(false);

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}
</script>

<nav
	class="sticky top-0 h-12 max-w-2xl p-8 mx-auto flex flex-row items-center backdrop-blur-md z-50 border-b border-border-default"
>
	<a
		class="font-bold mr-auto tracking-wide text-bright text-md hover:cursor-pointer"
		href="/"
	>
		<h1>Daniel Villavicencio</h1>
	</a>

	<!-- NavBar options desktop -->
	<ul
		class="flex flex-row gap-4 text-bright mx-2 justify-center content-center"
	>
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
