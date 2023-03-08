<script>
	import { Button, Textarea, Card as CommentCard } from 'flowbite-svelte';
	import CardsGrid from '$lib/components/app/CardsGrid.svelte';
	import Card from '$lib/components/app/Card.svelte';
	import PageHeader from '$src/lib/components/app/PageHeader.svelte';
	let items = [1, 2, 3, 4, 5];
</script>

<main class="grid grid-cols-12 mb-8 w-full gap-x-10 max-w-6xl mx-auto">
	<!-- Request info -->
	<section class="col-start-1 col-span-8">
		<!-- Request description -->
		<section class="flex flex-col gap-y-5 mb-10">
			<!-- Request header -->
			<PageHeader isEditable={true} title="Crear proyectos" />
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book.
			</p>

			<!-- Epic -->
			<div>
				<Button href="/projects/project-1/edit-epic" class="bg-red-500">Epic</Button>
			</div>
		</section>

		<!-- Issues -->
		<section class="border-t pt-8">
			<!-- Issues header -->
			<PageHeader title="Issues" route="./request-1/issue-1/edit-issue/" />

			<!-- Requests cards -->
			<div class="grid md:grid-cols-2 gap-5">
				{#each items as item}
					<Card route="project-1/request-1/issue-1" />
				{/each}
			</div>
		</section>
	</section>

	<!-- Comments -->
	<aside class="col-start-9 col-span-5 flex flex-col">
		<!-- Comment input -->
		<form class="">
			<Textarea class="w-full" placeholder="Write a comment">
				<div slot="footer">
					<Button type="submit">Post comment</Button>
				</div>
			</Textarea>
		</form>

		<!-- Comments -->
		<div class="mt-5 max-h-screen overflow-scroll flex flex-col gap-y-10 overflow-x-hidden">
			{#each items as item}
				<CommentCard padding="none" size="xl" class="">
					<article
						class="flex flex-col bg-white rounded-t-lg p-5 border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"
					>
						<section class="flex gap-x-2 mb-3">
							<img
								class="w-10 h-10 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
								alt="Karen profile"
							/>
							<div class="font-medium">
								<div>Fernando Mellone</div>
								<div class="text-sm font-light text-gray-500 dark:text-gray-400">
									Software Developer
								</div>
							</div>
						</section>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic rerum excepturi vitae
							totam necessitatibus dicta iste, aut doloribus facilis?
						</p>
					</article>
				</CommentCard>
			{/each}
		</div>
	</aside>
</main>
