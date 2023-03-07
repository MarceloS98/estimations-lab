<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle class="border-b border-slate-100 shadow-sm mb-8">
	<NavBrand href="/">
		<img
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQaI-XN2OEiFkSfEoxD1390W7gTcBBUpi4jAbuehq4nanh3N9zh_jNZ-py6lVgv7CH1w&usqp=CAU"
			class="mr-3 h-6 sm:h-9"
			alt="Penguin Logo"
		/>
	</NavBrand>
	<div class="flex md:order-2">
		<Button size="sm" class="hidden md:block" href="/login">Logout</Button>
		<NavHamburger on:click={toggle} />
	</div>
	<NavUl {hidden} class="order-1">
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/projects">Projects</NavLi>
		<NavLi href="/about">About</NavLi>
		<Button size="sm" class="md:hidden" href="/login">Logout</Button>
	</NavUl>
</Navbar>

<slot />
