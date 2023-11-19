import { nullish__none_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { is_ctx_ } from '@ctx-core/object'
import { data_row_a$_, data_row_a__set } from '../data_row_a/index.js'
/** @typedef {import('@ctx-core/object').Ctx} */
/** @typedef {import('../_types/index.d.ts').data_row_T} */
/** @typedef {import('./index.d.ts').data_row_M_data_row_a_idx_T} */
/** @type {typeof import('./index.d.ts').data_row_M_data_row_a_idx$_} */
export const data_row_M_data_row_a_idx$_ = be_(ctx=>
	computed_(data_row_a$_(ctx),
		data_row_a=>
			nullish__none_([data_row_a], ()=>
				data_row_M_data_row_a_idx__new(data_row_a)))
).config({ id: 'data_row_M_data_row_a_idx' })
export { data_row_M_data_row_a_idx$_ as data_row_M_data_row_a_idx__ }
/**
 * @param {Ctx|data_row_T[]}ctx_or_data_row_a
 * @returns{data_row_M_data_row_a_idx_T}
 * @private
 */
export function data_row_M_data_row_a_idx_(
	ctx_or_data_row_a
) {
	if (is_ctx_(ctx_or_data_row_a)) {
		return data_row_M_data_row_a_idx$_(/** @type {Ctx} */ctx_or_data_row_a).$
	}
	return data_row_M_data_row_a_idx__new(ctx_or_data_row_a)
}
/**
 * @param {Ctx}ctx
 * @param {data_row_M_data_row_a_idx_T}data_row_M_data_row_a_idx
 * @private
 */
export function data_row_M_data_row_a_idx__set(
	ctx,
	data_row_M_data_row_a_idx
) {
	data_row_a__set(
		ctx,
		/** @type {data_row_T[]} */[...data_row_M_data_row_a_idx.keys()])
}
/**
 * @param {data_row_T[]}data_row_a
 * @returns{data_row_M_data_row_a_idx_T}
 * @private
 */
export function data_row_M_data_row_a_idx__new(
	data_row_a
) {
	/** @type {data_row_M_data_row_a_idx_T} */
	const data_row_M_data_row_a_idx = new Map()
	for (let data_row_a_idx = 0; data_row_a_idx < data_row_a.length; data_row_a_idx++) {
		data_row_M_data_row_a_idx.set(data_row_a[data_row_a_idx], data_row_a_idx)
	}
	return data_row_M_data_row_a_idx
}
