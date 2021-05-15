import { _b } from '@ctx-core/object'
import { derived$ } from '@ctx-core/store'
import {
	$rows_data_filter_inputs_maybe_T, $rows_data_filter_inputs_T, rows_data_filter_inputs_b,
	rows_data_filter_inputs_ctx_I
} from './rows_data_filter_inputs_b'
import {
	$data_rows_T, $maybe_data_rows_T, data_rows_b, data_rows_ctx_I, data_rows_T
} from './data_rows_b'
export function data_rows_filter_b<Val extends unknown = unknown>(
	ctx:data_rows_filter_ctx_I<Val>
):data_rows_T<Val> {
	return _b('data_rows_filter', (ctx)=>
		derived$([
				rows_data_filter_inputs_b<Val>(ctx),
				data_rows_b<Val>(ctx)
			],
			(
				[data_rows_filter_inputs_maybe, maybe_data_row_a1]:[
					$rows_data_filter_inputs_maybe_T<Val>, $maybe_data_rows_T<Val>
				])=>{
				if (!data_rows_filter_inputs_maybe || !maybe_data_row_a1) return
				const data_rows_filter_inputs = data_rows_filter_inputs_maybe as $rows_data_filter_inputs_T<Val>
				const data_row_a1 = maybe_data_row_a1 as $data_rows_T<Val>
				const filter_rows = [] as Val[][]
				for (let i = 0; i < (data_row_a1 as unknown[]).length; i++) {
					const row = data_row_a1[i]
					let every
					for (let j = data_rows_filter_inputs.length; j--;) {
						const data_rows_input = data_rows_filter_inputs[j]
						const { column } = data_rows_input
						const value =
							row[column]
							|| 0
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
			}) as data_rows_T<Val>
	)(ctx)
}
export interface data_rows_filter_ctx_I<Val extends unknown = unknown>
	extends rows_data_filter_inputs_ctx_I<Val>, data_rows_ctx_I<Val> {
	data_rows_filter?:data_rows_T<Val>
}
export {
	data_rows_filter_b as b__filter__rows__data
}
