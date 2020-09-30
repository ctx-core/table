import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import {
	$rows_data_filter_inputs_maybe_type,
	$rows_data_filter_inputs_type,
	rows_data_filter_inputs_b
} from './rows_data_filter_inputs_b'
import { $data_rows_type, $maybe__data_rows_type, data_rows_b, data_rows_type } from './data_rows_b'
import type { row_type } from './row_type'
export function data_rows_filter_b<I extends row_type>(ctx?) {
	return _b('data_rows_filter', (ctx)=>
		derived([
				rows_data_filter_inputs_b<I>(ctx),
				data_rows_b<I>(ctx)
			],
			(
				[maybe__inputs__filter__rows__data, maybe__data_row_a1]:[
					$rows_data_filter_inputs_maybe_type<I>, $maybe__data_rows_type<I>
				])=>{
				if (!maybe__inputs__filter__rows__data || !maybe__data_row_a1) return
				const inputs__filter__rows__data = maybe__inputs__filter__rows__data as $rows_data_filter_inputs_type<I>
				const data_row_a1 = maybe__data_row_a1 as $data_rows_type<I>
				const filter_rows = [] as I[][]
				for (let i = 0; i < (data_row_a1 as unknown[]).length; i++) {
					const row = data_row_a1[i]
					let every
					for (let j = inputs__filter__rows__data.length; j--;) {
						const input__rows__data = inputs__filter__rows__data[j]
						const { column } = input__rows__data
						const value =
							row[column]
							|| 0
						if (input__rows__data.value > value) break
						if (!j) {
							every = true
						}
					}
					if (every) {
						filter_rows.push(row)
					}
				}
				return filter_rows
			}) as data_rows_type<I>
	)(ctx)
}
export const b__filter__rows__data = data_rows_filter_b
