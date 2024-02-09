/// <reference types="ctx-core" />
/// <reference types="../_types/index.d.ts" />
/// <reference types="./index.d.ts" />
import { be_, is_ctx_ } from 'ctx-core/be'
import { memo_, nullish__none_ } from 'ctx-core/rmemo'
import { data_row_a_, data_row_a__set } from '../data_row_a/index.js'
export const data_row_M_data_row_a_idx$_ = be_(ctx=>
	memo_(()=>
		nullish__none_([data_row_a_(ctx)],
			data_row_a=>
				data_row_M_data_row_a_idx__new(data_row_a))),
{ id: 'data_row_M_data_row_a_idx' })
export { data_row_M_data_row_a_idx$_ as data_row_M_data_row_a_idx__ }
/**
 * @param {ctx_T|data_row_T[]}ctx_or_data_row_a
 * @returns{data_row_M_data_row_a_idx_T}
 * @private
 */
export function data_row_M_data_row_a_idx_(
	ctx_or_data_row_a
) {
	if (is_ctx_(ctx_or_data_row_a)) {
		return data_row_M_data_row_a_idx$_(/** @type {ctx_T} */ctx_or_data_row_a)()
	}
	return data_row_M_data_row_a_idx__new(ctx_or_data_row_a)
}
/**
 * @param {ctx_T}ctx
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
