import type { Actions } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	createProject: async ({ request }) => {
		const { tittle, description } = Object.fromEntries(await request.formData()) as {
			tittle: string;
			description: string;
		};

		try {
			await prisma.projects.create({
				data: {
					tittle,
					description
				}
			});
		} catch (err) {
			return fail(500, { message: 'No se creo el articulo' });
		}
		return {
			status: 201
		};
	}
};
