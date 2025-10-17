<script lang="ts">
	import HamburgerButton from "./HamburgerButton.svelte";
	import Sidebar from "./Sidebar.svelte";
	import { User, Briefcase, Mail, Github, Home } from "lucide-svelte";

	import type { MenuOption } from "$lib/types/MenuOption";

	let menuOptions: MenuOption[] = [
		{
			name: "Home",
			desc: "Go back to Homepage",
			ref: "/",
			icon: Home,
		},
		{
			name: "Projects",
			desc: "View my work",
			ref: "/projects",
			icon: Briefcase,
		},
		{
			name: "Contact",
			desc: "Get in touch with me",
			ref: "Contact",
			icon: Mail,
		},
		{
			name: "About",
			desc: "Learn more about me",
			ref: "/about",
			icon: User,
		},
		{
			name: "Source",
			desc: "View code for this page",
			ref: "https://www.github.com/deahtstroke/Daniel",
			icon: Github,
		},
	];

	let sidebarOpen: boolean = $state<boolean>(false);

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}
</script>

<nav class="sticky top-0 h-18 backdrop-blur-md z-40">
	<div
		class="max-w-2xl m-auto h-full px-8 py-4 flex flex-row align-middle items-center"
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
				<li>
					<a
						href={option.ref}
						class="group relative overflow-hidden text-default font-bold hidden md:inline-block content-center cursor-pointer
							hover:text-bright"
					>
						{option.name}
						<div
							class="absolute bottom-0 left-0 right-0 bg-bright h-[2px] scale-x-0
						group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300
						origin-center"
						></div>
					</a>
				</li>
			{/each}
			<li class="block md:hidden relative content-start">
				<HamburgerButton onclick={toggleSidebar} />
			</li>
		</ul>
	</div>
</nav>

<!-- Mobile side bar -->
<Sidebar onclick={toggleSidebar} open={sidebarOpen} options={menuOptions} />
