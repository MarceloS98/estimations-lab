// Traer todos los proyectos y pasar al front
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		projects: await prisma.projects.findMany()
	};
};
