import { nullish__check_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_, is_ctx_ } from '@ctx-core/object'
import { header_row_, header_row__, header_row__set } from '../header_row/index.js'
import { table__new } from '../table/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {typeof import('../_types').column_a_T}column_a_T */
/** @typedef {typeof import('../_types').header_M_row_idx_T}header_M_row_idx_T */
/** @type {typeof import('./index.d.ts').header_M_row_idx__} */
export const header_M_row_idx__ = be_('header_M_row_idx__', ctx=>
	computed_(header_row__(ctx), header_a=>
		nullish__check_([header_a], ()=>
			header_M_row_idx__new(header_a))))
export {
	header_M_row_idx__ as column_M_row_idx__,
	header_M_row_idx__ as column_M_column_idx__,
}
/**
 * @param {Ctx|column_a_T}ctx_or_column_a
 * @returns {header_M_row_idx_T}
 * @private
 */
export function header_M_row_idx_(ctx_or_column_a) {
	if (is_ctx_(ctx_or_column_a)) {
		return /** @type {header_M_row_idx_T} */header_M_row_idx__(ctx_or_column_a).$
	}
	return header_M_row_idx__new(ctx_or_column_a)
}
export {
	header_M_row_idx_ as column_M_row_idx_,
	header_M_row_idx_ as column_M_column_idx_,
}
/**
 * @param {Ctx}ctx
 * @param {header_M_row_idx_T}column_M_column_idx
 * @private
 */
export function header_M_row_idx__set(ctx, column_M_column_idx) {
	header_row__set(ctx, [...column_M_column_idx.keys()])
}
export {
	header_M_row_idx__set as column_M_row_idx__set,
	header_M_row_idx__set as column_M_column_idx__set,
}
/**
 * @param {column_a_T}column_a
 * @returns {header_M_row_idx_T}
 * @private
 */
export function header_M_row_idx__new(column_a) {
	/** @type {header_M_row_idx_T} */
	const column_M_column_idx = new Map()
	for (let column_idx = 0; column_idx < column_a.length; column_idx++) {
		const column = column_a[column_idx]
		column_M_column_idx.set(column, column_idx)
	}
	return column_M_column_idx
}
export {
	header_M_row_idx__new as column_M_row_idx__new,
}
