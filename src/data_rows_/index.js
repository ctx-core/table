import { row_proxy_ } from '../row_proxy_/index.js'
/**
 * @param maybe_rows{unknown[]|null|undefined}
 * @param data_columns{string[]}
 * @param column_offsets{Record<string, number>}
 * @returns {unknown[]|undefined}
 */
export function data_rows_(
	maybe_rows, data_columns, column_offsets
) {
	if (!maybe_rows) return
	const rows = maybe_rows
	let data_rows = []
	for (let i = 0; i < rows.length; i++) {
		const row = rows[i]
		let data_row = []
		for (let j = 0; j < data_columns.length; j++) {
			const column = data_columns[j]
			data_row.push(row[column_offsets[column]])
		}
		data_rows.push(row_proxy_(data_row, column_offsets))
	}
	return data_rows
}
export {
	data_rows_ as _data_rows,
	data_rows_ as _rows__data,
}
