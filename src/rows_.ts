import { row_proxy_ } from './row_proxy_.js'
import type { table_T } from './table$_b.js'
import type { column_offsets_I } from './column_offsets_I.js'
import type { Row } from './Row.js'
export function rows_<I extends unknown, O extends Row = Row>(
	table:table_T<I>,
	column_offsets:column_offsets_I
) {
	if (!table || !column_offsets) return
	const data_row_a = table.slice(1) as I[][]
	let rows = [] as O[]
	for (let i = 0; i < data_row_a.length; i++) {
		const data_row = data_row_a[i]
		rows.push(
			row_proxy_<I, O>(data_row, column_offsets)
		)
	}
	return rows
}
export {
	rows_ as _rows,
}
