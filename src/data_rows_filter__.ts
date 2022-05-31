import { computed_, ReadableAtom_, } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { data_rows__, data_rows__T } from './data_rows__.js'
import { data_row_filter_inputs_T, data_rows_filter_inputs__, } from './data_rows_filter_inputs__.js'
export function data_rows_filter__<Val extends unknown = unknown>(
	ctx:Ctx
):data_rows__T<Val> {
	return _data_rows_filter__(ctx) as data_rows_filter__T<Val>
}
const _data_rows_filter__ = be_<data_rows__T>('data_rows_filter__', ctx=>
	computed_([
			data_rows_filter_inputs__(ctx),
			data_rows__<number>(ctx)
		],
		(
			data_rows_filter_inputs_maybe, maybe_data_row_a
		)=>{
			if (!data_rows_filter_inputs_maybe || !maybe_data_row_a) return
			const data_rows_filter_inputs = data_rows_filter_inputs_maybe as data_row_filter_inputs_T<number>[]
			const data_row_a = maybe_data_row_a
			const filter_rows = [] as unknown[][]
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
		}) as data_rows__T
)
export type data_rows_filter__T<Val extends unknown = unknown> = ReadableAtom_<Val[][]>
export { _data_rows_filter__ as _data_rows_filter$_ }
