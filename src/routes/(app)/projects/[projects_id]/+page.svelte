<script lang="ts">
	import PageHeader from '$lib/components/app/PageHeader.svelte';
	import EpicsBar from '$lib/components/app/EpicsBar.svelte';
	import CardsGrid from '$src/lib/components/app/CardsGrid.svelte';
	import { DescriptionList } from 'flowbite-svelte';

	export let data: any;

	$: project = { data }.data.project;
</script>

<main class="max-w-4xl mx-auto mb-8">
	<!-- Project description -->
	<section class="grid gap-y-5 mb-10">
		<PageHeader isEditable={true} title={project.tittle} />
		<!-- Description -->
		<p>{project.description}</p>

		<!-- Epics -->
		<EpicsBar />
	</section>

	<!-- Requests -->
	<section>
		<PageHeader title="Requests" />
		<!-- <CardsGrid route="project-1/request-1" /> -->
	</section>
</main>
