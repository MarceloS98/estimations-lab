<script>
	import Card from './Card.svelte';
	export let route = 'project-1';
	export let items = [1, 2, 3, 4, 5, 6, 7, 8];
</script>

<div class="grid md:grid-cols-2 gap-5">
	{#each items as item}
		<Card {route} />
	{/each}
</div>
