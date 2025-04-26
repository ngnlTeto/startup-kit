import PocketBase from 'pocketbase';

export function createInstance() {
	return new PocketBase('http://pocketbase:8080');
}

export const pb = createInstance();
