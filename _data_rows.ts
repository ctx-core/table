import type { maybe } from '@ctx-core/function'
import { _row_proxy } from './_row_proxy'
export function _data_rows<I, O = unknown>(
	maybe_rows:maybe<I[][]>,
	data_columns:string[],
	offsets__column:Record<string, number>
) {
	if (!maybe_rows) return
	const rows = maybe_rows as I[][]
	let data_rows = [] as O[]
	for (let i = 0; i < rows.length; i++) {
		const row = rows[i]
		let data_row = [] as I[]
		for (let j = 0; j < data_columns.length; j++) {
			const column = data_columns[j]
			data_row.push(row[offsets__column[column]])
		}
		data_rows.push(
			_row_proxy<I, O>(data_row, offsets__column)
		)
	}
	return data_rows
}
export const _rows__data = _data_rows
