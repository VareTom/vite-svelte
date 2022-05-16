import { Writable, writable } from 'svelte/store';

// Models
import type { User } from 'src/models/user';

export const connectedUser: Writable<User> = writable(undefined);
