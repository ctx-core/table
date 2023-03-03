import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { table__ } from '../table__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('./index.d.ts').data_row_a_filter_input_a_T}data_row_a_filter_input_a_T */
/** @type {typeof import('./index.d.ts').data_rows_filter_inputs__} */
export const data_row_a_filter_input_a__ = be_('data_row_a_filter_input_a__', ctx=>{
	const data_row_a_filter_input_a_ = atom_(undefined)
	if (has_dom) {
		table__(ctx).listen(()=>
			data_row_a_filter_input_a_.$ = undefined)
	}
	return data_row_a_filter_input_a_
})
export {
	data_row_a_filter_input_a__ as data_rows_filter_inputs__,
	data_row_a_filter_input_a__ as data_rows_filter_inputs$_,
}
/**
 * @param {Ctx}ctx
 * @returns {data_row_a_filter_input_a_T<unknown>[]}
 * @private
 */
export function data_row_a_filter_input_a_(ctx) {
  return data_row_a_filter_input_a__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {data_row_a_filter_input_a_T<unknown>[]}data_row_a_filter_input_a
 */
export function data_row_a_filter_input_a__set(ctx, data_row_a_filter_input_a) {
  data_row_a_filter_input_a__(ctx).$ = data_row_a_filter_input_a
}
