import { _b } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'table';
export function table_b(ctx) {
    return _b(key, () => writable$([]))(ctx);
}
export { table_b as b__table };
