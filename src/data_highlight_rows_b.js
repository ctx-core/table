import { _b } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'data_highlight_rows';
export function data_highlight_rows_b(ctx) {
    return _b(key, () => writable$(null))(ctx);
}
export { data_highlight_rows_b as b__highlight__rows__data };
