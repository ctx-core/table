import { has_dom } from '@ctx-core/dom'
import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { table$_ } from './table$_.js'
export function data_rows_filter_inputs$_<Val extends unknown = unknown>(ctx:Ctx) {
	return _data_rows_filter_inputs$_(ctx) as data_rows_filter_inputs$_T<Val>
}
const _data_rows_filter_inputs$_ = be_<data_rows_filter_inputs$_T>('data_rows_filter_inputs$', ctx=>{
	const data_rows_filter_inputs = atom_<data_row_filter_inputs_T[]|undefined>(
		undefined
	) as data_rows_filter_inputs$_T
	if (has_dom) {
		table$_(ctx).listen(()=>data_rows_filter_inputs.$ = undefined)
	}
	return data_rows_filter_inputs
})
export interface data_row_filter_inputs_T<Val extends unknown = unknown> {
	column:number
	value:Val
}
export type data_rows_filter_inputs$_T<Val extends unknown = unknown> =
	WritableAtom_<data_row_filter_inputs_T<Val>[]|undefined>
