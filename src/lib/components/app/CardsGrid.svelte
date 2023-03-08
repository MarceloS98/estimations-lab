<script lang="ts">
	import Card from './Card.svelte';

	export let projects: any[] = [];
</script>

<div class="grid md:grid-cols-2 gap-5">
	{#each projects as project}
		<Card {project} />
	{/each}
</div>
