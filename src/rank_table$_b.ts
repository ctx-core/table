import { be_ } from '@ctx-core/object'
import { tup } from '@ctx-core/array'
import { derived$, Readable$ } from '@ctx-core/store'
import type { falsy } from '@ctx-core/function'
import { row_proxy_ } from './row_proxy_.js'
import { rows$_b } from './rows$_b.js'
import { column_offsets$_b } from './column_offsets$_b.js'
import type { table_T } from './table$_b.js'
import { columns_T, columns$_b } from './columns$_b.js'
import type { Row } from './Row.js'
import type { table_Ctx } from './table_Ctx.js'
import type { column_offsets_I } from './column_offsets_I'
const key = 'rank_table$'
export function rank_table$_b<Val extends unknown = unknown>(ctx:table_Ctx<Val>) {
	return be_<table_Ctx<Val>, typeof key>(key, ()=>
		derived$(tup(
			columns$_b<Val>(ctx),
			rows$_b<Val>(ctx),
			column_offsets$_b<Val>(ctx),
			), ([$columns, $rows, $column_offsets])=>
				rank_table_<Val>($columns, $rows as Row<Val>[], $column_offsets as column_offsets_I)
		))(ctx)
}
function rank_table_<Val extends unknown = unknown>(
	maybe_columns:columns_T|falsy,
	maybe_rows:Row<Val>[],
	column_offsets:Record<string, number>,
):table_T<Val>|undefined {
	if (!maybe_columns || !maybe_rows) return
	const columns = maybe_columns as string[]
	const rows = maybe_rows as Row<Val>[]
	let table_rank = [] as table_T<Val>
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
		rank_rows[i] = row_proxy_(rank_rows[i], column_offsets)
	}
	return table_rank
}
export type rank_table$_T<Val extends unknown = unknown> =
	Readable$<table_T<Val>|undefined>
export {
	rank_table$_b as b__rank__table
}
