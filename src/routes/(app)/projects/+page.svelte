<script>
	import Card from '$lib/Card.svelte';
	import { Button } from 'flowbite-svelte';
	let items = [1, 2, 3, 4, 5, 6, 7, 8];
</script>

<main class="container mx-auto">
	<div class="flex items-center mb-4">
		<h1 class="container mx-auto text-4xl font-bold">Projects</h1>
		<Button href="/projects/create-project">Nuevo</Button>
	</div>

	<div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
		{#each items as item}
			<Card />
		{/each}
	</div>
</main>
