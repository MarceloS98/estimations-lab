<script lang="ts">
	import PageHeader from '$lib/components/app/PageHeader.svelte';
	import EpicsBar from '$lib/components/app/EpicsBar.svelte';
	import CardsGrid from '$src/lib/components/app/CardsGrid.svelte';
	import { DescriptionList } from 'flowbite-svelte';
	import { goto } from '$app/navigation';

	export let data: any;

	$: project_id = data.id;
	$: project = { data }.data.project;

	async function onDeleteProject() {
		console.log('llegamos al ondeleteproject');
		const response = await fetch(`/api/projects/${project_id}`, {
			method: 'DELETE'
		});
		goto('/projects');
	}
	$: epics = { data }.data.epics;
</script>

<main class="max-w-4xl mx-auto mb-8">
	<!-- Project description -->
	<section class="grid gap-y-5 mb-10">
		<PageHeader
			isEditable={true}
			title={project.tittle}
			type="project"
			{project_id}
			on:delete={() => {
				onDeleteProject();
			}}
		/>
		<!-- Description -->
		<p>{project.description}</p>

		<!-- Epics -->
		<EpicsBar {project_id} {epics} />
	</section>

	<!-- Requests -->
	<section>
		<PageHeader title="Requests" type="request" {project_id} />
		<!-- <CardsGrid route="project-1/request-1" /> -->
	</section>
</main>
