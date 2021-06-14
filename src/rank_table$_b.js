import { be_ } from '@ctx-core/object';
import { tup } from '@ctx-core/array';
import { derived$ } from '@ctx-core/store';
import { row_proxy_ } from './row_proxy_';
import { rows$_b } from './rows$_b';
import { column_offsets$_b } from './column_offsets$_b';
import { columns$_b } from './columns$_b';
const key = 'rank_table$';
export function rank_table$_b(ctx) {
    return be_(key, () => derived$(tup(columns$_b(ctx), rows$_b(ctx), column_offsets$_b(ctx)), ([$columns, $rows, $column_offsets]) => rank_table_($columns, $rows, $column_offsets)))(ctx);
}
function rank_table_(maybe_columns, maybe_rows, column_offsets) {
    if (!maybe_columns || !maybe_rows)
        return;
    const columns = maybe_columns;
    const rows = maybe_rows;
    let table_rank = [];
    table_rank.push(columns);
    for (let i = 0; i < rows.length; i++) {
        table_rank.push(...rows.slice(0));
    }
    const table_rows = table_rank.slice(1);
    const rank_rows = [];
    for (let i = 0; i < columns.length; i++) {
        const sorted_rows = table_rows.slice(0).sort((a, b) => a[i] > b[i]
            ? -1
            : a[i] < b[i]
                ? 1
                : 0);
        let rank = 0;
        let current_value = undefined;
        for (let j = 0; j < sorted_rows.length; j++) {
            const sorted_row = sorted_rows[j];
            const value = sorted_row[i];
            if (!current_value || current_value !== value) {
                current_value = value;
                rank++;
            }
            if (!j) {
                rank_rows.push([]);
            }
            const rank_row = rank_rows[j];
            rank_row[i] = rank;
        }
    }
    for (let i = 0; i < rank_rows.length; i++) {
        rank_rows[i] = row_proxy_(rank_rows[i], column_offsets);
    }
    return table_rank;
}
export { rank_table$_b as b__rank__table };
//# sourceMappingURL=src/rank_table$_b.js.map