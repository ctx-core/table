import { _b } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'row_id';
export const row_id_b = _b(key, () => writable$(undefined));
export { row_id_b as b__row_id };
