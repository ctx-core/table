import { _b } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'row';
export function row_b(ctx) {
    return _b(key, () => writable$(undefined))(ctx);
}
export { row_b as b__row };
