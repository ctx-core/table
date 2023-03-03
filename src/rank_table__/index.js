import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { column_a__ } from '../column_a__/index.js'
import { column_M_column_idx__ } from '../column_M_column_idx__/index.js'
import { row_a__ } from '../row_a__/index.js'
import { row_proxy_ } from '../row_proxy_/index.js'
//TODO: convert to row_M_rank__
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').Row}Row */
/** @typedef {import('../table__').table_T}table_T */
/** @type {typeof import('./index.d.ts').rank_table__} */
export const rank_table__ = be_('rank_table__', ctx=>
	computed_([
		column_a__(ctx),
		row_a__(ctx),
		column_M_column_idx__(ctx)
	], (
		column_a,
		row_a,
		column_M_column_idx
	)=>
		rank_table__new(column_a, row_a, column_M_column_idx)))
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
 * @param {string[]}column_a
 * @param {Row<unknown>[]}row_a
 * @param {Map<string, number>}column_M_column_idx
 * @returns {table_T<unknown>|undefined}
 */
function rank_table__new(
	column_a,
	row_a,
	column_M_column_idx
) {
	/** @type {table_T<unknown>} */
	const rank_table = {
		column_a,
		row_a,
	}
	const rank_row_a = []
	for (let i = 0; i < column_a.length; i++) {
		const sorted_rows =
			row_a.slice(0)
				.sort((a, b)=>
					a[i] > b[i]
					? -1
					: a[i] < b[i]
						? 1
						: 0)
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
				rank_row_a.push([])
			}
			const rank_row = rank_row_a[j]
			rank_row[i] = rank
		}
	}
	for (let i = 0; i < rank_row_a.length; i++) {
		rank_row_a[i] = row_proxy_(rank_row_a[i], column_M_column_idx)
	}
	return rank_table
}
