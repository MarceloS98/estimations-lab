<script>
	import { Navbar, NavLi, NavUl } from 'flowbite-svelte';
	import { Textarea, Button, Input, Label, Select } from 'flowbite-svelte';
	let epics = [
		{ value: 'Epic_amarillo', name: 'Epic amarillo', color: 'hover:bg-yellow-500' },
		{ value: 'Epic_rojo', name: 'Epic rojo', color: 'hover:bg-red-500' },
		{ value: 'Epic_verde', name: 'Epic verde', color: 'hover:bg-green-500' },
		{ value: 'Epic_azul', name: 'Epic azul', color: 'hover:bg-blue-500' }
	];
</script>

<h1 class="container mx-auto text-3xl font-bold underline">Edit request</h1>
<Navbar>
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/projects/project-1">Go Back</NavLi>
	</NavUl>
</Navbar>

<div class="w-full h-full flex items-center justify-center">
	<div>
		<form>
			<Label class="m-2 block">Edite aqui su request</Label>
			<Input
				class="mb-2 pb-2 text-xs"
				id="nombre_request"
				type="text"
				placeholder="Nombre del request"
				size="default"
			/>
			<Label for="desc_id" class="ml-2 mb-2 mt-2">Descripcion del request</Label>
			<Textarea
				class="w-66 h-52 text-xs"
				id="desc_request"
				placeholder="Escriba aqui"
				rows="4"
				name="message"
			/>
			<div class="flex justify-center">
				<Button id="guardar" class="mr-2" type="submit">Guardar</Button>
				<Button id="cancelar" type="submit">Cancelar</Button>
			</div>
			<div class="flex flex-col pt-2">
				<h2>Seleccione su tipo de epic</h2>
				<select name="" id="">
					{#each epics as epic}
						<!-- <Select class="p-4 {epic.color} {epic.color}-dark" items={epic.name}></Select> -->
						<option value={epic.name} class={`${epic.color}`}>{epic.name}</option>
					{/each}
				</select>
			</div>
		</form>
	</div>
	<!-- <div class="flex flex-col">
		{#each epics as epic}
			<a href="sadas" class="p-4 bg-{epic.color} hover:bg-{epic.color}-dark">{epic.name}</a>
		{/each}
	</div> -->
</div>
