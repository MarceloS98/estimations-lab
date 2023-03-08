<script>
	import CreateForm from '$lib/components/app/CreateForm.svelte';

	export let data;
</script>

<CreateForm type="request" epics={data.epics} />
