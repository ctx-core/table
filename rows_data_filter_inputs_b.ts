import type { maybe_null } from '@ctx-core/function'
import { _clear_store, subscribe, writable, Writable } from '@ctx-core/store'
import { _b } from '@ctx-core/object'
import { has__dom } from '@ctx-core/dom'
import { table_b } from './table_b'
import type { row_type } from './row_type'
export function rows_data_filter_inputs_b<I extends row_type>(ctx?:object) {
	return _b('rows_data_filter_inputs', ctx=>{
		const rows_data_filter_inputs = writable<$rows_data_filter_inputs_maybe_type<I>>(
			null
		) as rows_data_filter_inputs_type<I>
		if (has__dom) {
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
export const b__inputs__filter__rows__data = rows_data_filter_inputs_b
export interface $data_row_filter_input<I> {
	column:number
	value:I
}
export type $rows_data_filter_inputs_type<I extends unknown> = $data_row_filter_input<I>[]
export type $rows_data_filter_inputs_maybe_type<I extends unknown> =
	maybe_null<$rows_data_filter_inputs_type<I>>
export type rows_data_filter_inputs_type<I extends unknown> =
	Writable<$rows_data_filter_inputs_maybe_type<I>>
