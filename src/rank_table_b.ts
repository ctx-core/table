import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import type { falsy } from '@ctx-core/function'
import { _row_proxy } from './_row_proxy'
import { rows_b } from './rows_b'
import { column_offsets_b } from './column_offsets_b'
import type { $table_T } from './table_b'
import { $columns_T, columns_b } from './columns_b'
import type { Row } from './Row'
import type { table_Ctx } from './table_Ctx'
const key = 'rank_table'
export function rank_table_b<Val extends unknown = unknown>(ctx:table_Ctx<Val>) {
	return _b<table_Ctx<Val>, typeof key>(key, ()=>
		derived$([
				columns_b<Val>(ctx),
				rows_b<Val>(ctx),
				column_offsets_b<Val>(ctx),
			], ([$columns, $rows, $column_offsets])=>
				_rank_table<Val>($columns, $rows, $column_offsets)
		))(ctx)
}
function _rank_table<Val extends unknown = unknown>(
	maybe_columns:$columns_T|falsy,
	maybe_rows:Row<Val>[],
	column_offsets:Record<string, number>,
):$table_T<Val>|undefined {
	if (!maybe_columns || !maybe_rows) return
	const columns = maybe_columns as string[]
	const rows = maybe_rows as Row<Val>[]
	let table_rank = [] as $table_T<Val>
	table_rank.push(columns)
	for (let i = 0; i < rows.length; i++) {
		table_rank.push(...rows.slice(0))
	}
	const table_rows = table_rank.slice(1) as Row<Val>[]
	const rank_rows:number[][] = []
	for (let i = 0; i < columns.length; i++) {
		const sorted_rows:Row<Val>[] =
			table_rows.slice(0).sort(
				(a:Row<Val>, b:Row<Val>)=>
					a[i] > b[i]
					? -1
					: a[i] < b[i]
						? 1
						: 0)
		let rank = 0
		let current_value:Val|undefined = undefined
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
export type rank_table_T<Val extends unknown = unknown> =
	Readable$<$table_T<Val>|undefined>
export {
	rank_table_b as b__rank__table
}
