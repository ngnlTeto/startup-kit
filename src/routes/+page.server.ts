import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    redirect(301, "/home")
}) satisfies PageServerLoad;
