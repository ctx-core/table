import { _row_proxy } from './_row_proxy';
export function _rows(table, column_offsets) {
    if (!table || !column_offsets)
        return;
    const data_row_a1 = table.slice(1);
    let rows = [];
    for (let i = 0; i < data_row_a1.length; i++) {
        const data_row = data_row_a1[i];
        rows.push(_row_proxy(data_row, column_offsets));
    }
    return rows;
}
