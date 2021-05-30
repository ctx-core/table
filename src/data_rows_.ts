import type { falsy } from '@ctx-core/function'
import { row_proxy_ } from './row_proxy_'
import type { Row } from './Row'
export function data_rows_<I extends Row, O extends unknown = unknown>(
	maybe_rows:I[]|falsy,
	data_columns:string[],
	column_offsets:Record<string, number>
) {
	if (!maybe_rows) return
	const rows = maybe_rows as I[]
	let data_rows = [] as O[]
	for (let i = 0; i < rows.length; i++) {
		const row = rows[i]
		let data_row = [] as unknown[]
		for (let j = 0; j < data_columns.length; j++) {
			const column = data_columns[j]
			data_row.push(row[column_offsets[column]])
		}
		data_rows.push(
			row_proxy_<unknown, O>(data_row, column_offsets)
		)
	}
	return data_rows
}
export {
	data_rows_ as _data_rows,
	data_rows_ as _rows__data,
}
