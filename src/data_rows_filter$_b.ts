import { be_ } from '@ctx-core/object'
import { tup } from '@ctx-core/array'
import { derived$ } from '@ctx-core/store'
import { data_rows_filter_inputs_T, data_rows_filter_inputs$_b } from './data_rows_filter_inputs$_b'
import { data_rows_T, data_rows$_b, data_rows$_T } from './data_rows$_b'
import type { table_Ctx } from './table_Ctx'
const key = 'data_rows_filter'
export interface data_rows_filter_Ctx<Val extends unknown = unknown>
	extends table_Ctx<Val> {
	[key]?:data_rows$_T<Val>
}
export function data_rows_filter$_b<Val extends unknown = unknown>(
	ctx:table_Ctx<Val>
):data_rows$_T<Val> {
	return be_<data_rows_filter_Ctx<Val>, typeof key>(key, (ctx)=>
		derived$(tup(
				data_rows_filter_inputs$_b<Val>(ctx),
				data_rows$_b<Val>(ctx)
			),
			(
				[data_rows_filter_inputs_maybe, maybe_data_row_a])=>{
				if (!data_rows_filter_inputs_maybe || !maybe_data_row_a) return
				const data_rows_filter_inputs = data_rows_filter_inputs_maybe as data_rows_filter_inputs_T<Val>
				const data_row_a = maybe_data_row_a as data_rows_T<Val>
				const filter_rows = [] as Val[][]
				for (let i = 0; i < (data_row_a as unknown[]).length; i++) {
					const row = data_row_a[i]
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
			}) as data_rows$_T<Val>
	)(ctx)
}
export {
	data_rows_filter$_b as b__filter__rows__data
}
