<script>
	import { Navbar, NavLi, NavUl } from 'flowbite-svelte';
</script>

<h1 class="container mx-auto text-3xl font-bold underline">Project 1</h1>
<Navbar>
	<NavUl>
		<NavLi href="/projects/project-1/create-epic">Create Epic</NavLi>
		<NavLi href="/projects/project-1/edit-epic">Edit Epic</NavLi>
		<NavLi href="/projects/project-1/create-request">Create Request</NavLi>
		<NavLi href="/projects/project-1/edit-request">Edit Request</NavLi>
	</NavUl>
</Navbar>
