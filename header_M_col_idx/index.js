import { nullish__none_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { assign, be_, is_ctx_ } from '@ctx-core/object'
import { header_row$_, header_row__set } from '../header_row/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {typeof import('../_types/index.d.ts').header_row_sym}header_row_sym */
/** @typedef {typeof import('../_types/index.d.ts').header_row_T}header_row_T */
/** @typedef {typeof import('../_types/index.d.ts').header_M_col_idx_T}header_M_col_idx_T */
/** @type {typeof import('./index.d.ts').header_M_col_idx__} */
export const header_M_col_idx__ = be_('header_M_col_idx__', ctx=>
	computed_(header_row$_(ctx), header_a=>
		nullish__none_([header_a], ()=>
			header_M_col_idx__new(header_a))))
/**
 * @param {Ctx|header_row_T}ctx_or_header_row
 * @returns {header_M_col_idx_T}
 * @private
 */
export function header_M_col_idx_(
	ctx_or_header_row
) {
	if (is_ctx_(ctx_or_header_row)) {
		return /** @type {header_M_col_idx_T} */header_M_col_idx__(ctx_or_header_row).$
	}
	return header_M_col_idx__new(/** @type {header_row_T} */ctx_or_header_row)
}
/**
 * @param {Ctx}ctx
 * @param {header_M_col_idx_T}header_M_col_idx
 * @private
 */
export function header_M_col_idx__set(
	ctx,
	header_M_col_idx
) {
	header_row__set(ctx, [...header_M_col_idx.keys()])
}
/**
 * @param {header_row_T}header_row
 * @returns {header_M_col_idx_T}
 * @private
 */
export function header_M_col_idx__new(
	header_row
) {
	/** @type {header_M_col_idx_T} */
	const column_M_column_idx = assign(
		new Map(),
		{
			get header_row() {
				return header_row
			}
		})
	for (let column_idx = 0; column_idx < header_row.length; column_idx++) {
		const header = header_row[column_idx]
		column_M_column_idx.set(header, column_idx)
	}
	return column_M_column_idx
}
