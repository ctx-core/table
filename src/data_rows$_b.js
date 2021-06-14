import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { data_rows_ } from './data_rows_';
import { rows$_b } from './rows$_b';
import { columns$_b } from './columns$_b';
import { column_offsets$_b } from './column_offsets$_b';
const key = 'data_rows$';
export function data_rows$_b(ctx) {
    return be_(key, () => derived$([
        rows$_b(ctx),
        columns$_b(ctx),
        column_offsets$_b(ctx),
    ], ([$rows, $columns, $column_offsets]) => data_rows_($rows, $columns, $column_offsets)))(ctx);
}
export { data_rows$_b as b__rows__data };
//# sourceMappingURL=src/data_rows$_b.js.map