import { _b } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { _rows } from './_rows';
import { table_b } from './table_b';
import { column_offsets_b } from './column_offsets_b';
const key = 'rows';
export function rows_b(ctx) {
    const table = table_b(ctx);
    return _b(key, ctx => derived$([
        table,
        column_offsets_b(ctx)
    ], ([$table, $column_offsets]) => {
        return _rows($table, $column_offsets);
    }))(ctx);
}
export { rows_b as b__rows };
