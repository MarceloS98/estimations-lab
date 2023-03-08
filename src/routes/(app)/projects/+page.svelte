<script lang="ts">
	import PageHeader from '$lib/components/app/PageHeader.svelte';
	import CardsGrid from '$src/lib/components/app/CardsGrid.svelte';

	export let data: any;

	$: projects = { data }.data.projects;
</script>

<main class="container mx-auto max-w-4xl mb-10">
	<PageHeader title="Projects" project_id={projects.project_id} type="project" />
	<CardsGrid {projects} />
</main>
