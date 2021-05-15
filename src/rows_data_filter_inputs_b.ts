import type { maybe_null } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { _clear_store, subscribe, writable, Writable } from '@ctx-core/store'
import { table_b, table_ctx_I } from './table_b'
export function rows_data_filter_inputs_b<Val extends unknown = unknown>(ctx:rows_data_filter_inputs_ctx_I<Val>) {
	return _b<rows_data_filter_inputs_T<Val>>('rows_data_filter_inputs',
		(ctx:rows_data_filter_inputs_ctx_I<Val>)=>{
			const rows_data_filter_inputs = writable<$rows_data_filter_inputs_maybe_T<Val>>(
				null
			) as rows_data_filter_inputs_T<Val>
			if (has_dom) {
				subscribe(
					table_b<Val>(ctx),
					_clear_store<$rows_data_filter_inputs_maybe_T<Val>>(
						rows_data_filter_inputs, null
					)
				)
			}
			return rows_data_filter_inputs
		})(ctx)
}
export interface rows_data_filter_inputs_ctx_I<Val extends unknown = unknown> extends table_ctx_I<Val> {
	rows_data_filter_inputs?:rows_data_filter_inputs_T<Val>
}
export interface $data_row_filter_input<I> {
	column:number
	value:I
}
export type $rows_data_filter_inputs_T<Val extends unknown = unknown> = $data_row_filter_input<Val>[]
export type $rows_data_filter_inputs_maybe_T<Val extends unknown = unknown> =
	maybe_null<$rows_data_filter_inputs_T<Val>>
export interface rows_data_filter_inputs_T<Val extends unknown = unknown>
	extends Writable<$rows_data_filter_inputs_maybe_T<Val>> {}
export { rows_data_filter_inputs_b as b__inputs__filter__rows__data }
