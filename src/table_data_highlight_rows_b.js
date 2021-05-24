import { _b } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'table_data_highlight_rows';
export function table_data_highlight_rows_b(ctx) {
    return _b(key, () => writable$(undefined))(ctx);
}
export { table_data_highlight_rows_b as b__table__highlight__rows__data };
