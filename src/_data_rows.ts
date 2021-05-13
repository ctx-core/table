import type { maybe } from '@ctx-core/function'
import { _row_proxy } from './_row_proxy'
import type { row_type } from './row_type'
export function _data_rows<I extends row_type, O extends unknown = unknown>(
	maybe_rows:maybe<I[]>,
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
