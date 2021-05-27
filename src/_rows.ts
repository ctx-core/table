import { _row_proxy } from './_row_proxy'
import type { $table_T } from './table_b'
import type { column_offsets_I } from './column_offsets_I'
import type { Row } from './Row'
export function _rows<I extends unknown, O extends Row = Row>(
	table:$table_T<I>,
	column_offsets:column_offsets_I
) {
	if (!table || !column_offsets) return
	const data_row_a1 = table.slice(1) as I[][]
	let rows = [] as O[]
	for (let i = 0; i < data_row_a1.length; i++) {
		const data_row = data_row_a1[i]
		rows.push(
			_row_proxy<I, O>(data_row, column_offsets)
		)
	}
	return rows
}
