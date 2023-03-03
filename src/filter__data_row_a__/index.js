import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { data_row_a__ } from '../data_row_a__/index.js'
import { data_row_a_filter_input_a__ } from '../data_row_a_filter_input_a__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').filter__data_row_a__} */
export const filter__data_row_a__ = be_('filter__data_row_a__', ctx=>
	computed_([
		data_row_a_filter_input_a__(ctx),
		data_row_a__(ctx)
	], (
		maybe_data_row_a_filter_input_a,
		maybe_data_row_a
	)=>{
		if (!maybe_data_row_a_filter_input_a || !maybe_data_row_a) return
		const data_row_a_filter_input_a = maybe_data_row_a_filter_input_a
		const data_row_a = maybe_data_row_a
		const filter_row_a = []
		for (let i = 0; i < data_row_a.length; i++) {
			const row = data_row_a[i]
			let every
			for (let j = data_row_a_filter_input_a.length; j--;) {
				const data_row_a_input = data_row_a_filter_input_a[j]
				const { column } = data_row_a_input
				const value = row[column] || 0
				if (data_row_a_input.value > value) break
				if (!j) {
					every = true
				}
			}
			if (every) {
				filter_row_a.push(row)
			}
		}
		return filter_row_a
	}))
export {
	filter__data_row_a__ as data_rows_filter__,
	filter__data_row_a__ as _data_rows_filter$_,
}
/**
 * @param {Ctx}ctx
 * @returns {unknown[][]}
 * @private
 */
export function filter__data_row_a_(ctx) {
  return filter__data_row_a__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {unknown[][]}filter__data_row_a
 */
export function filter__data_row_a__set(ctx, filter__data_row_a) {
  filter__data_row_a__(ctx).$ = filter__data_row_a
}
