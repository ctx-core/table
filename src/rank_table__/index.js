import { tup } from '@ctx-core/array'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { column_offset_a__ } from '../column_offset_a__/index.js'
import { column_a__ } from '../column_a__/index.js'
import { row_a__ } from '../row_a__/index.js'
import { row_proxy_ } from '../row_proxy_/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../table__').table_T}table_T */
/** @type {typeof import('./index.d.ts').rank_table__} */
export const rank_table__ = be_('rank_table__', ctx=>
	computed_(
		tup(column_a__(ctx), row_a__(ctx), column_offset_a__(ctx)), (
			columns,
			rows,
			column_offset_a
		)=>
			rank_table_(columns, rows, column_offset_a)))
export {
	rank_table__ as rank_table$_,
	rank_table__ as b__rank__table,
}
/**
 * @param {Ctx}ctx
 * @returns {table_T<unknown>}
 * @private
 */
export function rank_table_(ctx) {
  return rank_table__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {table_T<unknown>}rank_table
 */
export function rank_table__set(ctx, rank_table) {
  rank_table_(ctx).$ = rank_table
}
/**
 * @param maybe_columns{string[]}
 * @param maybe_row_a{import('../Row').Row[]}
 * @param column_offset_a{import('../_types').column_offsets_T}
 * @returns {import('../table__').table_T|undefined}
 */
function rank_table_(
	maybe_columns,
	maybe_row_a,
	column_offset_a
) {
	if (!maybe_columns || !maybe_row_a) return
	const columns = maybe_columns
	const rows = maybe_row_a
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
		rank_rows[i] = row_proxy_(rank_rows[i], column_offset_a)
	}
	return table_rank
}
