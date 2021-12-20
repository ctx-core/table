import { has_dom } from '@ctx-core/dom'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { table$_b } from './table$_b.js'
const key = 'data_rows_filter_inputs$'
export function data_rows_filter_inputs$_b<Val extends unknown = unknown>(
	ctx:Ctx
) {
	return be_<data_rows_filter_inputs$_T>(key, ()=>{
		const data_rows_filter_inputs = atom$<data_row_filter_inputs_T<Val>[]|undefined>(
			undefined
		) as data_rows_filter_inputs$_T<Val>
		if (has_dom) {
			table$_b<Val>(ctx).listen(()=>data_rows_filter_inputs.$ = undefined)
		}
		return data_rows_filter_inputs
	})(ctx)
}
export interface data_row_filter_inputs_T<Val extends unknown = unknown> {
	column:number
	value:Val
}
export type data_rows_filter_inputs$_T<Val extends unknown = unknown> =
	WritableAtom$<data_row_filter_inputs_T<Val>[]|undefined>
export { data_rows_filter_inputs$_b as b__inputs__filter__rows__data }
