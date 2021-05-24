import { _b } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { _data_rows } from './_data_rows';
import { rows_b } from './rows_b';
import { columns_b } from './columns_b';
import { column_offsets_b } from './column_offsets_b';
const key = 'data_rows';
export function data_rows_b(ctx) {
    return _b(key, () => derived$([
        rows_b(ctx),
        columns_b(ctx),
        column_offsets_b(ctx),
    ], ([$rows, $columns, $column_offsets]) => _data_rows($rows, $columns, $column_offsets)))(ctx);
}
export { data_rows_b as b__rows__data };
