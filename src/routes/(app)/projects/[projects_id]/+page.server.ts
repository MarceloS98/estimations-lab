// Traer todos los proyectos y pasar al front
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

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
	deleteProject: async ({ params }) => {
		console.log('dentro del actions');
		try {
			await prisma.projects.update({
				where: {
					projects_id: Number(params.projects_id)
				},
				data: {
					deleted_status: true
				}
			});
		} catch (error) {
			console.error(error);
			return { status: 500, message: 'could not delete the project' };
		}
		throw redirect(303, `/projects`);
	}
};
