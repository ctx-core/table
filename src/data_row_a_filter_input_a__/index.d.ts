import { WritableAtom_ } from '@ctx-core/nanostores'
import { Ctx } from '@ctx-core/object'
export declare function data_row_a_filter_input_a__<
	Val extends unknown = unknown
>(ctx:Ctx):WritableAtom_<data_row_a_filter_input_a_T<Val>[]|undefined>
export {
	data_row_a_filter_input_a__ as data_rows_filter_inputs__,
	data_row_a_filter_input_a__ as data_rows_filter_inputs$_,
}
export declare function data_row_a_filter_input_a_<
	Val extends unknown = unknown
>(ctx:Ctx):data_row_a_filter_input_a_T<Val>[]|undefined
export declare function data_row_a_filter_input_a__set<
	Val extends unknown = unknown
>(ctx:Ctx, data_row_a_filter_input_a:data_row_a_filter_input_a_T<Val>[]):void
export interface data_row_a_filter_input_a_T<
	Val extends unknown = unknown
> {
	column:number
	value:Val
}
export declare type data_row_filter_inputs_T<
	Val extends unknown = unknown
> = data_row_a_filter_input_a_T<Val>
