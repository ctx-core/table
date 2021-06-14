import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { rows_ } from './rows_';
import { table$_b } from './table$_b';
import { column_offsets$_b } from './column_offsets$_b';
const key = 'rows$';
export function rows$_b(ctx) {
    const table = table$_b(ctx);
    return be_(key, ctx => derived$([
        table,
        column_offsets$_b(ctx)
    ], ([$table, $column_offsets]) => {
        return rows_($table, $column_offsets);
    }))(ctx);
}
export { rows$_b as b__rows };
//# sourceMappingURL=src/rows$_b.js.map