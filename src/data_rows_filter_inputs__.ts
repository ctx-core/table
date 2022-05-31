import { has_dom } from '@ctx-core/dom'
import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { table__ } from './table__.js'
export function data_rows_filter_inputs__<Val extends unknown = unknown>(ctx:Ctx) {
	return _data_rows_filter_inputs__(ctx) as data_rows_filter_inputs__T<Val>
}
const _data_rows_filter_inputs__ = be_<data_rows_filter_inputs__T>('data_rows_filter_inputs__', ctx=>{
	const data_rows_filter_inputs = atom_<data_row_filter_inputs_T[]|undefined>(
		undefined
	) as data_rows_filter_inputs__T
	if (has_dom) {
		table__(ctx).listen(()=>data_rows_filter_inputs.$ = undefined)
	}
	return data_rows_filter_inputs
})
export interface data_row_filter_inputs_T<Val extends unknown = unknown> {
	column:number
	value:Val
}
export type data_rows_filter_inputs__T<Val extends unknown = unknown> =
	WritableAtom_<data_row_filter_inputs_T<Val>[]|undefined>
export { data_rows_filter_inputs__ as data_rows_filter_inputs$_ }
