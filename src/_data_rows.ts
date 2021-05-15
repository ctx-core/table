import type { falsy } from '@ctx-core/function'
import { _row_proxy } from './_row_proxy'
import type { Row } from './Row'
export function _data_rows<I extends Row, O extends unknown = unknown>(
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
			_row_proxy<unknown, O>(data_row, column_offsets)
		)
	}
	return data_rows
}
export {
	_data_rows as _rows__data
}
