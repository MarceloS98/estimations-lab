<script>
	import PageHeader from '$lib/components/app/PageHeader.svelte';
	import EpicsBar from '$lib/components/app/EpicsBar.svelte';
	import CardsGrid from '$src/lib/components/app/CardsGrid.svelte';
</script>

<main class="max-w-4xl mx-auto mb-8">
	<!-- Project description -->
	<section class="grid gap-y-5 mb-10">
		<PageHeader isEditable={true} title="Lab Estimations" />
		<!-- Description -->
		<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book.
		</p>

		<!-- Epics -->
		<EpicsBar />
	</section>

	<!-- Requests -->
	<section>
		<PageHeader title="Requests" />
		<CardsGrid route="project-1/request-1" />
	</section>
</main>
