import { tup } from '@ctx-core/array'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { column_offsets__ } from '../column_offsets__/index.js'
import { columns__ } from '../columns__/index.js'
import { rows__ } from '../rows__/index.js'
import { row_proxy_ } from '../row_proxy_/index.js'
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {import('./index.d.ts').rank_table__T}
 */
export function rank_table__(ctx) {
	return _rank_table__(ctx)
}
const _rank_table__ = be_('rank_table__', ctx=>
	computed_(
		tup(columns__(ctx), rows__(ctx), column_offsets__(ctx)), (
			columns,
			rows,
			column_offsets
		)=>
			rank_table_(columns, rows, column_offsets)))
/**
 * @param maybe_columns{string[]}
 * @param maybe_rows{import('../Row').Row[]}
 * @param column_offsets{import('../_types').column_offsets_T}
 * @returns {import('../table__').table_T|undefined}
 */
function rank_table_(
	maybe_columns,
	maybe_rows,
	column_offsets
) {
	if (!maybe_columns || !maybe_rows) return
	const columns = maybe_columns
	const rows = maybe_rows
	let table_rank = []
	table_rank.push(columns)
	for (let i = 0; i < rows.length; i++) {
		table_rank.push(...rows.slice(0))
	}
	const table_rows = table_rank.slice(1)
	const rank_rows = []
	for (let i = 0; i < columns.length; i++) {
		const sorted_rows = table_rows.slice(0).sort((a, b)=>a[i] > b[i] ? -1 : a[i] < b[i] ? 1 : 0)
		let rank = 0
		let current_value = undefined
		for (let j = 0; j < sorted_rows.length; j++) {
			const sorted_row = sorted_rows[j]
			const value = sorted_row[i]
			if (!current_value || current_value !== value) {
				current_value = value
				rank++
			}
			if (!j) {
				rank_rows.push([])
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
export {
	rank_table__ as rank_table$_,
	rank_table__ as b__rank__table,
}
