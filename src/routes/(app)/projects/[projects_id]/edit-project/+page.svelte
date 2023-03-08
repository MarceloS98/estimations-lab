<script lang="ts">
	import CreateForm from '$lib/components/app/CreateForm.svelte';

	export let data: any;
	$: project = { data }.data.project;
	// console.log({ data }.data.project);
</script>

<CreateForm type="project" toEdit={true} {project} />
