<script lang="ts">
	import { Button } from 'flowbite-svelte';

	export let project_id: Number;
	export let epics: any[];
</script>

<div class="flex justify-between">
	<div class="flex gap-x-4">
		{#each epics as epic}
			<Button href={`/projects/${project_id}/edit-epic`} style={`background-color:${epic.color}`}
				>{epic.name}</Button
			>
		{/each}
	</div>
	<Button pill={true} outline={true} color="light" href={`/projects/${project_id}/create-epic`}
		>Nuevo Epic</Button
	>
</div>
