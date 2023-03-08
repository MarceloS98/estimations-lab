import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import type { Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const getProject = async () => {
		const project = await prisma.projects.findUnique({
			where: {
				projects_id: Number(params.projects_id)
			}
		});
		if (!project) {
			return { status: 404, error: 'project not found' };
		}
		return project;
	};

	return {
		project: getProject()
	};
};

export const actions: Actions = {
	updateProject: async ({ request, params }) => {
		// console.log('llegamos');
		// console.log(params);
		const { tittle, description } = Object.fromEntries(await request.formData()) as {
			tittle: string;
			description: string;
		};
		try {
			await prisma.projects.update({
				where: {
					projects_id: Number(params.projects_id)
				},
				data: {
					tittle,
					description
				}
			});
		} catch (error) {
			console.error(error);
			return { status: 500, message: 'could not update the project' };
		}
		throw redirect(303, `/projects`);
	},
	// deleteProject: async ({ params }) => {
	// 	try {
	// 		await prisma.projects.update({
	// 			where: {
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
