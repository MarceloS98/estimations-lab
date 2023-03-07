<script>
	import { Button, Textarea, Card as CommentCard } from 'flowbite-svelte';
	let items = [1, 2, 3, 4, 5];
</script>

<main class="grid grid-cols-12 mb-8 w-full gap-x-10 max-w-6xl mx-auto">
	<!-- Request info -->
	<section class="col-start-1 col-span-8">
		<!-- Request description -->
		<section class="flex flex-col gap-y-5 mb-10">
			<!-- Request header -->
			<div class="flex items-center justify-between">
				<div>
					<h1 class="text-4xl font-bold">Issue 1</h1>
					<span class="text-slate-400  mr-4">Tiempo de estimacion: 3h</span>
					<span class="text-slate-400 ">Estimacion: 6h</span>
				</div>
				<div class="flex gap-x-2">
					<Button href="/projects/project-1/edit-request">Editar</Button>
					<Button href="/projects/project-1/delete-request">Eliminar</Button>
				</div>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quos consectetur impedit
				dolores quas ipsa sunt, placeat dignissimos tenetur facere reiciendis commodi, harum ducimus
				ipsam cupiditate magnam reprehenderit dolorem accusamus fugit! Aperiam doloremque quas, aut
				blanditiis nostrum molestiae nulla fugiat eum doloribus omnis, voluptatum, ut quasi. Ipsa
				numquam, blanditiis iste magni, neque laborum harum sit in animi voluptatum libero facere
				optio impedit perspiciatis amet ullam veritatis. Tenetur, ab. Ducimus dolorem minima tempora
				laudantium ut est repellat sit neque totam repellendus provident hic obcaecati velit quasi
				corrupti ab esse laboriosam eius veritatis, nulla magnam. Doloremque eius magni cum libero,
				neque architecto dolorem maiores a iure quisquam aperiam fugiat quas veritatis cupiditate
				eveniet quis quidem voluptates pariatur in nemo quibusdam iste aliquam quod. Deserunt facere
				quos dolorum beatae! Dolorum similique, quod minus voluptate vero libero ipsam id nulla quia
				ea, et, labore odio beatae sequi magni nostrum eveniet. Vel culpa similique blanditiis
				maxime mollitia voluptas possimus, architecto cumque officiis vero esse, voluptatum debitis.
				Optio autem totam sequi repellendus iste libero eos tenetur a dolores repellat nam, minus
				neque. Quibusdam consequatur, minus placeat optio odio, aspernatur excepturi numquam
				voluptatum ipsa praesentium unde odit porro natus laborum ex, eos ratione rem nulla.
				Pariatur atque veritatis, ea dignissimos voluptatum quibusdam molestiae perspiciatis autem
				alias tempora corporis suscipit? Quasi nostrum perspiciatis commodi, animi dolores
				distinctio, ullam, modi vel culpa porro numquam aliquam incidunt voluptas magni sit dicta
				delectus tenetur ut itaque rem esse nobis necessitatibus! Error aliquam esse numquam nihil
				voluptatem est doloribus porro quos fugiat.
			</p>
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
