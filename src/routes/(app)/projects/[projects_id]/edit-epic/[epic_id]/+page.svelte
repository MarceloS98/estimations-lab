<script lang="ts">
	import { Toggle, Button, Input, Label } from 'flowbite-svelte';

	export let data: any;
	let epic_name = '';

	$: ({ name, color } = data.epic);
	$: toggleColor = color.trim();
	$: epic_name = name;
</script>

<div class="w-full h-full flex items-center justify-center">
	<form action="?/updateEpic" method="POST">
		<div class="flex">
			<Toggle
				color="red"
				checked={toggleColor === 'red'}
				on:click={() => {
					toggleColor = 'red';
				}}
				bind:value={toggleColor}
				name="updatedColor"
			>
				Red
			</Toggle>

			<Toggle
				color="green"
				checked={toggleColor === 'green'}
				on:click={() => {
					toggleColor = 'green';
				}}
				bind:value={toggleColor}
				name="updatedColor"
			>
				Green
			</Toggle>
			<Toggle
				color="blue"
				checked={toggleColor === 'blue'}
				on:click={() => {
					toggleColor = 'blue';
				}}
				bind:value={toggleColor}
				name="updatedColor"
			>
				Blue
			</Toggle>
			<Toggle
				color="yellow"
				checked={toggleColor === 'yellow'}
				on:click={() => {
					toggleColor = 'yellow';
				}}
				bind:value={toggleColor}
				name="updatedColor"
			>
				Yellow
			</Toggle>
			<Toggle
				color="purple"
				checked={toggleColor === 'purple'}
				on:click={() => {
					toggleColor = 'purple';
				}}
				bind:value={toggleColor}
				name="updatedColor"
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
				bind:value={epic_name}
				name="updatedName"
			/>

			<div class="flex justify-center">
				<Button id="guardar" class="mr-2" type="submit">Guardar</Button>
				<!-- <Button id="cancelar" type="submit">Cancelar</Button> -->
			</div>
		</div>
	</form>
</div>
