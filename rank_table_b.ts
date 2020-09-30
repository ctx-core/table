import { _b } from '@ctx-core/object'
import { spread_derived } from '@ctx-core/store'
import type { maybe } from '@ctx-core/function'
import { _row_proxy } from './_row_proxy'
import { rows_b } from './rows_b'
import { column_offsets_b } from './column_offsets_b'
import type { $table_type } from './table_b'
import { $columns_type, columns_b } from './columns_b'
import type { row_type } from './row_type'
export const rank_table_b = _b('rank_table', ctx=>
	spread_derived([
		columns_b(ctx),
		rows_b(ctx),
		column_offsets_b(ctx),
	], _rank_table))
export const b__rank__table = rank_table_b
function _rank_table<I extends row_type>(
	maybe_columns:maybe<$columns_type>,
	maybe_rows:I[],
	column_offsets
) {
	if (!maybe_columns || !maybe_rows) return
	const columns = maybe_columns as string[]
	const rows = maybe_rows as I[]
	let table_rank = [] as $table_type<I>
	table_rank.push(columns)
	for (let i = 0; i < rows.length; i++) {
		table_rank.push(...rows.slice(0))
	}
	const table_rows = table_rank.slice(1) as I[]
	const rank_rows = [] as number[][]
	for (let i = 0; i < columns.length; i++) {
		const sorted_rows =
			table_rows.slice(0).sort(
				(a, b)=>
					a[i] > b[i]
					? -1
					: a[i] < b[i]
						? 1
						: 0)
		let rank = 0
		let current_value:I|null = null
		for (let j = 0; j < sorted_rows.length; j++) {
			const sorted_row = sorted_rows[j]
			const value = sorted_row[i]
			if (!current_value || current_value !== value) {
				current_value = value
				rank++
			}
			if (!j) {
				rank_rows.push([] as number[])
			}
			const rank_row = rank_rows[j]
			rank_row[i] = rank
		}
	}
	for (let i = 0; i < rank_rows.length; i++) {
		rank_rows[i] = _row_proxy(rank_rows[i], column_offsets)
	}
	return table_rank
}
