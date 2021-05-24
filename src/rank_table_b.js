import { _b } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { _row_proxy } from './_row_proxy';
import { rows_b } from './rows_b';
import { column_offsets_b } from './column_offsets_b';
import { columns_b } from './columns_b';
const key = 'rank_table';
export function rank_table_b(ctx) {
    return _b(key, () => derived$([
        columns_b(ctx),
        rows_b(ctx),
        column_offsets_b(ctx),
    ], ([$columns, $rows, $column_offsets]) => _rank_table($columns, $rows, $column_offsets)))(ctx);
}
function _rank_table(maybe_columns, maybe_rows, column_offsets) {
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
        rank_rows[i] = _row_proxy(rank_rows[i], column_offsets);
    }
    return table_rank;
}
export { rank_table_b as b__rank__table };
