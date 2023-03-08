import { PrismaClient, Prisma } from '@prisma/client';

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
	global.prisma = prisma;
}

const softDeleteMiddleware: Prisma.Middleware = async (params, next) => {
	if (params.action === 'delete') {
		console.log(params.args);

		return prisma.projects.update({
			where: {
				projects_id: +params.args.where.projects_id
			},
			data: {
				deleted_status: true,
				deleted_at: new Date()
			}
		});
	}

	return next(params);
};

prisma.$use(softDeleteMiddleware);

export { prisma };
