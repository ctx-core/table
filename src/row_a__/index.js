import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { column_offset_a__ } from '../column_offset_a__/index.js'
import { row_proxy_ } from '../row_proxy_/index.js'
import { table__ } from '../table__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').Row}Row */
/** @type {typeof import('./index.d.ts').row_a__} */
export const row_a__ = be_('row_a__', ctx=>
	computed_([
		table__(ctx),
		column_offset_a__(ctx)
	], (
		table,
		column_offset_a
	)=>row_a__new(table, column_offset_a)))
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
 * @param {import('../_types').column_offsets_T}column_offset_a
 * @returns {Row<unknown>[]|undefined}
 */
export function row_a__new(
	table,
	column_offset_a
) {
	if (!table || !column_offset_a) return
	const data_row_a = table.slice(1)
	let row_a = []
	for (let i = 0; i < data_row_a.length; i++) {
		const data_row = data_row_a[i]
		row_a.push(row_proxy_(data_row, column_offset_a))
	}
	return row_a
}
