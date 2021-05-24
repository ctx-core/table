import { _row_proxy } from './_row_proxy';
export function _data_rows(maybe_rows, data_columns, column_offsets) {
    if (!maybe_rows)
        return;
    const rows = maybe_rows;
    let data_rows = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        let data_row = [];
        for (let j = 0; j < data_columns.length; j++) {
            const column = data_columns[j];
            data_row.push(row[column_offsets[column]]);
        }
        data_rows.push(_row_proxy(data_row, column_offsets));
    }
    return data_rows;
}
export { _data_rows as _rows__data };
