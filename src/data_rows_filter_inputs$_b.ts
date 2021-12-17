import { has_dom } from '@ctx-core/dom'
import { be_, Ctx } from '@ctx-core/object'
import { clear_store_, subscribe, writable, Writable } from '@ctx-core/store'
import { table$_b } from './table$_b.js'
const key = 'data_rows_filter_inputs$'
export function data_rows_filter_inputs$_b<Val extends unknown = unknown>(
	ctx:Ctx
) {
	return be_<data_rows_filter_inputs$_T>(key, ()=>{
		const data_rows_filter_inputs = writable<data_row_filter_inputs_T<Val>[]|undefined>(
			undefined
		) as data_rows_filter_inputs$_T<Val>
		if (has_dom) {
			subscribe(
				table$_b<Val>(ctx),
				clear_store_<data_row_filter_inputs_T<Val>[]|undefined>(
					data_rows_filter_inputs, undefined
				)
			)
		}
		return data_rows_filter_inputs
	})(ctx)
}
export interface data_row_filter_inputs_T<Val extends unknown = unknown> {
	column:number
	value:Val
}
export type data_rows_filter_inputs$_T<Val extends unknown = unknown> =
	Writable<data_row_filter_inputs_T<Val>[]|undefined>
export { data_rows_filter_inputs$_b as b__inputs__filter__rows__data }
