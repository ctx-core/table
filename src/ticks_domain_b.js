import { _b } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'ticks_domain';
export const ticks_domain_b = _b(key, () => writable$([0, 5.0, 10.0]));
export { ticks_domain_b as b__ticks_domain };
