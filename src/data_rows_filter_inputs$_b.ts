import { be_ } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { _clear_store, subscribe, writable, Writable } from '@ctx-core/store'
import { table$_b } from './table$_b.js'
import type { table_Ctx } from './table_Ctx'
const key = 'data_rows_filter_inputs$'
export function data_rows_filter_inputs$_b<Val extends unknown = unknown>(
	ctx:table_Ctx<Val>
) {
	return be_<table_Ctx<Val>, typeof key>(key, ()=>{
		const data_rows_filter_inputs = writable<data_rows_filter_inputs_T<Val>|undefined>(
			undefined
		) as data_rows_filter_inputs$_T<Val>
		if (has_dom) {
			subscribe(
				table$_b<Val>(ctx),
				_clear_store<data_rows_filter_inputs_T<Val>|undefined>(
					data_rows_filter_inputs, undefined
				)
			)
		}
		return data_rows_filter_inputs
	})(ctx)
}
export interface $data_row_filter_input<I> {
	column:number
	value:I
}
export type data_rows_filter_inputs_T<Val extends unknown = unknown> = $data_row_filter_input<Val>[]
export interface data_rows_filter_inputs$_T<Val extends unknown = unknown>
	extends Writable<data_rows_filter_inputs_T<Val>|undefined> {}
export { data_rows_filter_inputs$_b as b__inputs__filter__rows__data }
