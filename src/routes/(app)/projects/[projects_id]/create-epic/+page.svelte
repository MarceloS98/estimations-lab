<script>
	import { Navbar, NavLi, NavUl, Toggle } from 'flowbite-svelte';
	import { Textarea, Button, Input, Label } from 'flowbite-svelte';
	let selectedColor = 'red';
</script>

<h1 class="container mx-auto text-3xl font-bold underline">Create Epic</h1>
<Navbar>
	<NavUl>
		<NavLi href="/projects/project-1">Go Back</NavLi>
	</NavUl>
</Navbar>
<div class="w-full h-full flex items-center justify-center">
	<div class="flex">
		<Toggle color="red" checked={selectedColor === 'red'} on:click={() => (selectedColor = 'red')}
			>Red</Toggle
		>
		<Toggle
			color="green"
			checked={selectedColor === 'green'}
			on:click={() => (selectedColor = 'green')}>Green</Toggle
		>
		<Toggle
			color="blue"
			checked={selectedColor === 'blue'}
			on:click={() => (selectedColor = 'blue')}>Blue</Toggle
		>
		<Toggle
			color="yellow"
			checked={selectedColor === 'yellow'}
			on:click={() => (selectedColor = 'yellow')}>yellow</Toggle
		>
		<Toggle
			color="purple"
			checked={selectedColor === 'purple'}
			on:click={() => (selectedColor = 'purple')}>Blue</Toggle
		>
	</div>
	<div>
		<form>
			<Label class="m-2 block">Cree aqui su proyecto</Label>
			<Input
				class="mb-2 pb-2 text-xs"
				id="nombre_proyecto"
				type="text"
				placeholder="Nombre del proyecto"
				size="default"
			/>
			<Label for="" class="ml-2 mb-2 mt-2">Descripcion del proyecto</Label>
			<Textarea
				class="w-66 h-52 text-xs"
				id="desc_proyecto"
				placeholder="Escriba aqui"
				rows="4"
				name="message"
			/>
			<div class="flex justify-center">
				<Button id="guardar" class="mr-2" type="submit">Guardar</Button>
				<Button id="cancelar" type="submit">Cancelar</Button>
			</div>
		</form>
	</div>
</div>
