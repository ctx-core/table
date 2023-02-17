import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { data_rows__ } from '../data_rows__/index.js'
import { data_rows_filter_inputs__ } from '../data_rows_filter_inputs__/index.js'
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {import('../data_rows__').data_rows__T}
 */
export function data_rows_filter__(ctx) {
	return _data_rows_filter__(ctx)
}
const _data_rows_filter__ = be_('data_rows_filter__', ctx=>
	computed_([
		data_rows_filter_inputs__(ctx),
		data_rows__(ctx)
	], (maybe__data_rows_filter_inputs, maybe__data_row_a)=>{
		if (!maybe__data_rows_filter_inputs || !maybe__data_row_a) return
		const data_rows_filter_inputs = maybe__data_rows_filter_inputs
		const data_row_a = maybe__data_row_a
		const filter_rows = []
		for (let i = 0; i < data_row_a.length; i++) {
			const row = data_row_a[i]
			let every
			for (let j = data_rows_filter_inputs.length; j--;) {
				const data_rows_input = data_rows_filter_inputs[j]
				const { column } = data_rows_input
				const value = row[column] || 0
				if (data_rows_input.value > value) break
				if (!j) {
					every = true
				}
			}
			if (every) {
				filter_rows.push(row)
			}
		}
		return filter_rows
	}))
export { _data_rows_filter__ as _data_rows_filter$_ }
