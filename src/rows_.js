import { row_proxy_ } from './row_proxy_';
export function rows_(table, column_offsets) {
    if (!table || !column_offsets)
        return;
    const data_row_a = table.slice(1);
    let rows = [];
    for (let i = 0; i < data_row_a.length; i++) {
        const data_row = data_row_a[i];
        rows.push(row_proxy_(data_row, column_offsets));
    }
    return rows;
}
export { rows_ as _rows, };
//# sourceMappingURL=src/rows_.js.map