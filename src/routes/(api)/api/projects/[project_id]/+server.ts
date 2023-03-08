import type { RequestHandler } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const DELETE: RequestHandler = async (request) => {
	console.log(request.params);

	await prisma.projects.delete({
		where: {
			projects_id: Number(request.params.project_id)
		}
	});
	return new Response();
};
