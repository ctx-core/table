import { tup } from '@ctx-core/array'
import type { falsy } from '@ctx-core/function'
import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { column_offsets__ } from './column_offsets__.js'
import { columns__ } from './columns__.js'
import type { column_offsets_T } from './column_offsets_T.js'
import { rows__ } from './rows__.js'
import { row_proxy_ } from './row_proxy_.js'
import type { table_T } from './table__.js'
import type { Row } from './Row.js'
export function rank_table__<Val extends unknown = unknown>(ctx:Ctx) {
	return _rank_table__(ctx) as rank_table__T<Val>
}
const _rank_table__ = be_<rank_table__T>('rank_table__', ctx=>
	computed_(tup(
			columns__(ctx),
			rows__(ctx),
			column_offsets__(ctx),
		), (columns, rows, column_offsets)=>
			rank_table_(columns, rows as Row[], column_offsets as column_offsets_T)
	))
function rank_table_<Val extends unknown = unknown>(
	maybe_columns:string[]|falsy,
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
export type rank_table__T<Val extends unknown = unknown> =
	ReadableAtom_<table_T<Val>|undefined>
export {
	rank_table__ as rank_table$_,
	rank_table__ as b__rank__table
}
