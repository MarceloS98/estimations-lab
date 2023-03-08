<script lang="ts">
	import { Navbar, NavLi, NavUl, Toggle } from 'flowbite-svelte';
	import { Textarea, Button, Input, Label } from 'flowbite-svelte';
	let name = '';
	let color = 'red';

	export let data: any;

	$: project_id = data.id;
	// $: project = { data }.data.project;
</script>

<div class="w-full h-full flex items-center justify-center">
	<form action="?/createEpics" method="POST">
		<div class="flex">
			<Toggle
				color="red"
				checked={color === 'red'}
				on:click={() => {
					color = 'red';
				}}
				bind:value={color}
				name="color"
			>
				Red
			</Toggle>

			<Toggle
				color="green"
				checked={color === 'green'}
				on:click={() => {
					color = 'green';
				}}
				bind:value={color}
				name="color"
			>
				Green
			</Toggle>
			<Toggle
				color="blue"
				checked={color === 'blue'}
				on:click={() => {
					color = 'blue';
				}}
				bind:value={color}
				name="color"
			>
				Blue
			</Toggle>
			<Toggle
				color="yellow"
				checked={color === 'yellow'}
				on:click={() => {
					color = 'yellow';
				}}
				bind:value={color}
				name="color"
			>
				Yellow
			</Toggle>
			<Toggle
				color="purple"
				checked={color === 'purple'}
				on:click={() => {
					color = 'purple';
				}}
				bind:value={color}
				name="color"
			>
				Purple
			</Toggle>
		</div>
		<div>
			<Label class="m-2 block">Cree aqui su proyecto</Label>
			<Input
				class="mb-2 pb-2 text-xs"
				id="name"
				type="text"
				placeholder="Nombre del proyecto"
				size="default"
				bind:value={name}
				name="name"
			/>
			<!-- <Label for="" class="ml-2 mb-2 mt-2">Descripcion del proyecto</Label>
			<Textarea
				class="w-66 h-52 text-xs"
				id="color"
				placeholder="Escriba aqui"
				rows="4"
				name="message"
			/> -->
			<div class="flex justify-center">
				<Button id="guardar" class="mr-2" type="submit">Guardar</Button>
				<!-- <Button id="cancelar" type="submit">Cancelar</Button> -->
			</div>
		</div>
	</form>
</div>
