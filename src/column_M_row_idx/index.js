import { nullish__check_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_, is_ctx_ } from '@ctx-core/object'
import { header_row__ } from '../header_row/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {typeof import('../_types').column_a_T}column_a_T */
/** @typedef {typeof import('./index.d.ts').column_M_row_idx_T}column_M_row_idx_T */
/** @type {typeof import('./index.d.ts').column_M_row_idx__} */
export const column_M_row_idx__ = be_('column_M_row_idx__', ctx=>
	computed_(header_row__(ctx), column_a=>
		nullish__check_([column_a], ()=>
			column_M_row_idx_(ctx, column_a))))
export {
	column_M_row_idx__ as column_M_column_idx__,
}
/**
 * @param {Ctx|column_a_T}ctx_or_column_a
 * @returns {column_M_row_idx_T}
 * @private
 */
export function column_M_row_idx_(ctx_or_column_a) {
	if (is_ctx_(ctx_or_column_a)) return column_M_row_idx__(ctx_or_column_a).$
	return column_M_row_idx__new(ctx_or_column_a)
}
export {
	column_M_row_idx_ as column_M_column_idx_,
}
/**
 * @param {Ctx}ctx
 * @param {column_M_row_idx_T}column_M_column_idx
 * @private
 */
export function column_M_row_idx__set(ctx, column_M_column_idx) {
	column_M_row_idx__(ctx).$ = column_M_column_idx
}
export {
	column_M_row_idx__set as column_M_column_idx__set,
}
/**
 * @param {column_a_T}column_a
 * @returns {column_M_row_idx_T}
 * @private
 */
export function column_M_row_idx__new(column_a) {
	/** @type {column_M_row_idx_T} */
	const column_M_column_idx = new Map()
	for (let column_idx = 0; column_idx < column_a.length; column_idx++) {
		const column = column_a[column_idx]
		column_M_column_idx.set(column, column_idx)
	}
	return column_M_column_idx
}
