import { _row_proxy } from './_row_proxy'
export function _rows<I, O = unknown>(
	table:I[][],
	offsets__column:Record<string, number>
) {
	if (!table || !offsets__column) return
	const data_row_a1 = table.slice(1)
	let rows = [] as O[]
	for (let i = 0; i < data_row_a1.length; i++) {
		const data_row = data_row_a1[i]
		rows.push(
			_row_proxy<I, O>(data_row, offsets__column)
		)
	}
	return rows
}
