import { tup } from '@ctx-core/array'
import { be_, Ctx } from '@ctx-core/object'
import { derived$, } from '@ctx-core/store'
import { data_rows$_b, data_rows$_T } from './data_rows$_b.js'
import { data_row_filter_inputs_T, data_rows_filter_inputs$_b, } from './data_rows_filter_inputs$_b.js'
const key = 'data_rows_filter'
export function data_rows_filter$_b<Val extends unknown = unknown>(
	ctx:Ctx
):data_rows$_T<Val> {
	return be_<data_rows$_T<Val>>(key, (ctx)=>
		derived$(tup(
				data_rows_filter_inputs$_b<Val>(ctx),
				data_rows$_b<Val>(ctx)
			),
			(
				[data_rows_filter_inputs_maybe, maybe_data_row_a])=>{
				if (!data_rows_filter_inputs_maybe || !maybe_data_row_a) return
				const data_rows_filter_inputs = data_rows_filter_inputs_maybe as data_row_filter_inputs_T<Val>[]
				const data_row_a = maybe_data_row_a as Val[][]
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
