import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	return {
		epics: await prisma.epics.findMany({
			where: {
				projects_id: Number(params.projects_id)
			}
		})
	};
};

export const actions: Actions = {
	createRequests: async ({ params, request }) => {
		console.log('llegaste aqui');
		const { name, description } = Object.fromEntries(await request.formData()) as {
			name: string;
			description: string;
		};
		console.log(name, description);

		try {
			await prisma.requests.create({
				data: {
					name,
					description,
					projects_id: Number(params.projects_id)
				}
			});
		} catch (err) {
			return fail(500, { message: 'No se creo el epic' });
		}

		throw redirect(303, `/projects/${params.projects_id}`);
	}
};
