import { nullish__check_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { column_M_column_idx__ } from '../column_M_column_idx__/index.js'
import { row_proxy_ } from '../row_proxy_/index.js'
import { table__ } from '../table__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').Row}Row */
/** @type {typeof import('./index.d.ts').row_a__} */
export const row_a__ = be_('row_a__', ctx=>
	computed_([
		table__(ctx),
		column_M_column_idx__(ctx)
	], (
		table,
		column_M_column_idx
	)=>row_a__new(table, column_M_column_idx)))
export {
	row_a__ as rows__,
	row_a__ as rows$_,
}
/**
 * @param {Ctx}ctx
 * @returns {Row<unknown>[]}
 * @private
 */
export function row_a_(ctx) {
	return row_a__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {Row<unknown>[]}row_a
 */
export function row_a__set(ctx, row_a) {
	row_a__(ctx).$ = row_a
}
/**
 * @param {import('../table__').table_T}table
 * @param {Map<string, number>}column_M_column_idx
 * @returns {Row<unknown>[]|null|undefined}
 */
export function row_a__new(
	table,
	column_M_column_idx
) {
	return nullish__check_([table, column_M_column_idx], ()=>{
		const _row_a = table.row_a
		let row_a = []
		for (let i = 0; i < _row_a.length; i++) {
			const _row = _row_a[i]
			row_a.push(row_proxy_(_row, column_M_column_idx))
		}
		return row_a
	})
}
