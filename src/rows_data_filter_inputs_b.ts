import type { maybe_null } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { _clear_store, subscribe, writable, Writable } from '@ctx-core/store'
import { table_b } from './table_b'
import type { row_type } from './row_type'
export function rows_data_filter_inputs_b<I extends row_type, C extends object = object>(ctx:C) {
	return _b<rows_data_filter_inputs_type<I>, C>('rows_data_filter_inputs', ctx=>{
		const rows_data_filter_inputs = writable<$rows_data_filter_inputs_maybe_type<I>>(
			null
		) as rows_data_filter_inputs_type<I>
		if (has_dom) {
			subscribe(
				table_b<I>(ctx),
				_clear_store<$rows_data_filter_inputs_maybe_type<I>>(
					rows_data_filter_inputs, null
				)
			)
		}
		return rows_data_filter_inputs
	})(ctx)
}
export interface $data_row_filter_input<I> {
	column:number
	value:I
}
export type $rows_data_filter_inputs_type<I extends unknown> = $data_row_filter_input<I>[]
export type $rows_data_filter_inputs_maybe_type<I extends unknown> =
	maybe_null<$rows_data_filter_inputs_type<I>>
export interface rows_data_filter_inputs_type<I extends unknown>
	extends Writable<$rows_data_filter_inputs_maybe_type<I>> {}
export { rows_data_filter_inputs_b as b__inputs__filter__rows__data }
