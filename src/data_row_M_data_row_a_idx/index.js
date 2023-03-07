import { nullish__check_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_, is_ctx_ } from '@ctx-core/object'
import { data_row_a__ } from '../data_row_a/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').data_row_T}data_row_T */
/** @typedef {import('./index.d.ts').data_row_M_data_row_a_idx_T}data_row_M_data_row_a_idx_T */
/** @type {typeof import('./index.d.ts').data_row_M_data_row_a_idx__} */
export const data_row_M_data_row_a_idx__ = be_('data_row_M_data_row_a_idx__', ctx=>
	computed_(data_row_a__(ctx),
		/**
		 * @param {data_row_T<unknown>}data_row_a
		 * @param {data_row_T<unknown>[]}table__row_a
		 * @returns {Map<data_row_T<unknown>, number>}
		 */
		data_row_a=>
			nullish__check_([data_row_a], ()=>
				data_row_M_data_row_a_idx__new(data_row_a))))
export {
	data_row_M_data_row_a_idx__ as row_M_row_idx__,
}
/**
 * @param {Ctx|data_row_T[]}ctx_or_data_row_a
 * @returns{data_row_M_data_row_a_idx_T}
 * @private
 */
export function data_row_M_data_row_a_idx_(ctx_or_data_row_a) {
	if (is_ctx_(ctx_or_data_row_a)) return data_row_M_data_row_a_idx__(ctx_or_data_row_a).$
	return data_row_M_data_row_a_idx__new(ctx_or_data_row_a)
}
export {
	data_row_M_data_row_a_idx_ as row_M_row_idx_,
}
/**
 * @param {Ctx}ctx
 * @param {data_row_M_data_row_a_idx_T}row_M_row_idx
 * @private
 */
export function data_row_M_data_row_a_idx__set(
	ctx,
	row_M_row_idx
) {
	data_row_M_data_row_a_idx__(ctx).$ = row_M_row_idx
}
export {
	data_row_M_data_row_a_idx__set as row_M_row_idx__set,
}
/**
 * @param {data_row_T[]}data_row_a
 * @returns{data_row_M_data_row_a_idx_T}
 * @private
 */
export function data_row_M_data_row_a_idx__new(data_row_a) {
	/** @type {data_row_M_data_row_a_idx_T} */
	const data_row_M_data_row_a_idx = new Map()
	for (let data_row_a_idx = 0; data_row_a_idx < data_row_a.length; data_row_a_idx++) {
		data_row_M_data_row_a_idx.set(data_row_a[data_row_a_idx], data_row_a_idx)
	}
	return data_row_M_data_row_a_idx
}
