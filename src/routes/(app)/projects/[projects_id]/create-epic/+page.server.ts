import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	return {
		project: await prisma.projects.findUnique({
			where: {
				projects_id: Number(params.projects_id)
			}
		}),
		id: params.projects_id
	};
};

export const actions: Actions = {
	createEpics: async ({ params, request }) => {
		console.log('llegaste aqui');
		const { name, color } = Object.fromEntries(await request.formData()) as {
			name: string;
			color: string;
		};
		console.log(name, color);

		try {
			await prisma.epics.create({
				data: {
					name,
					color,
					projects_id: Number(params.projects_id)
				}
			});
		} catch (err) {
			return fail(500, { message: 'No se creo el epic' });
		}

		throw redirect(303, `/projects/${params.projects_id}`);
	}
};
