import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { column_a__ } from '../column_a__/index.js'
import { column_offset_a__ } from '../column_offset_a__/index.js'
import { row_a__ } from '../row_a__/index.js'
import { row_proxy_ } from '../row_proxy_/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').data_row_a__} */
export const data_row_a__ = be_('data_row_a__', ()=>
	computed_([
		row_a__(ctx),
		column_a__(ctx),
		column_offset_a__(ctx)
	], (
		rows,
		columns,
		column_offset_a
	)=>
		data_row_a__new(rows, columns, column_offset_a)))
export {
	data_row_a__ as data_rows__,
	data_row_a__ as data_rows$_,
}
/**
 * @param {Ctx}ctx
 * @returns {unknown[][]}
 * @private
 */
export function data_row_a_(ctx) {
	return data_row_a__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {unknown[][]}data_row_a
 */
export function data_row_a__set(ctx, data_row_a) {
	data_row_a__(ctx).$ = data_row_a
}
/**
 * @param {unknown[]|null|undefined}maybe_row_a
 * @param {string[]}data_column_a
 * @param {Record<string, number>}column_offset_a
 * @returns {unknown[]|undefined}
 */
export function data_row_a__new(
	maybe_row_a,
	data_column_a,
	column_offset_a
) {
	if (!maybe_row_a) return
	const rows = maybe_row_a
	let data_rows = []
	for (let i = 0; i < rows.length; i++) {
		const row = rows[i]
		let data_row = []
		for (let j = 0; j < data_column_a.length; j++) {
			const column = data_column_a[j]
			data_row.push(row[column_offset_a[column]])
		}
		data_rows.push(row_proxy_(data_row, column_offset_a))
	}
	return data_rows
}
export {
	data_row_a__new as data_rows_,
	data_row_a__new as _data_rows,
	data_row_a__new as _rows__data,
}
