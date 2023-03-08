<script lang="ts">
	import Card from './Card.svelte';

	export let projects: any[] = [];
</script>

<div class="grid md:grid-cols-2 gap-5">
	{#each projects as project}
		{#if project.deleted_status == false}
			<Card {project} />
		{/if}
	{/each}
</div>
