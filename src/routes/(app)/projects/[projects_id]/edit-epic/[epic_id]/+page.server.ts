import type { PageServerLoad } from '../../$types';
import { prisma } from '$lib/server/prisma';
import { redirect, type Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	// console.log('Print del epic', params.epic_id);
	const getEpic = async () => {
		const epic = await prisma.epics.findUnique({
			where: {
				epics_id: Number(params.epic_id)
			}
		});
		if (!epic) {
			return { status: 404, error: 'project not found' };
		}
		return epic;
	};

	return {
		epic: getEpic()
	};
};

const getEpic = async (epic_id: Number) => {
	const epic = await prisma.epics.findUnique({
		where: {
			epics_id: Number(epic_id)
		}
	});
	if (!epic) {
		return { status: 404, error: 'project not found' };
	}
	return epic;
};

export const actions: Actions = {
	updateEpic: async ({ request, params }) => {
		console.log('llegamos');
		console.log(params);
		const { updatedName, updatedColor } = Object.fromEntries(await request.formData()) as {
			updatedName: string;
			updatedColor: string;
		};
		console.log(updatedName, updatedColor);
		try {
			await prisma.epics.update({
				where: {
					epics_id: Number(params.epic_id)
				},
				data: {
					name: updatedName,
					color: updatedColor
				}
			});
			console.log(getEpic(Number(params.epic_id)));
		} catch (error) {
			console.error(error);
			return { status: 500, message: 'could not update the project' };
		}
		throw redirect(303, `/projects`);
	}
};
