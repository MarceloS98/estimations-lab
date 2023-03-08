// Traer todos los proyectos y pasar al front
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		project: await prisma.projects.findUnique({
			where: {
				projects_id: Number(params.projects_id)
			}
		}),
		id: params.projects_id,
		epics: await prisma.epics.findMany({
			where: {
				projects_id: Number(params.projects_id)
			}
		})
	};
};
