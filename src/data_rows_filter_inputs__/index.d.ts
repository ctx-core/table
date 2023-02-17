import { WritableAtom_ } from '@ctx-core/nanostores'
import { Ctx } from '@ctx-core/object'
export declare function data_rows_filter_inputs__<
  Val extends unknown = unknown
>(ctx:Ctx):data_rows_filter_inputs__T<Val>
export interface data_row_filter_inputs_T<Val extends unknown = unknown> {
	column:number
	value:Val
}
export type data_rows_filter_inputs__T<
  Val extends unknown = unknown
> = WritableAtom_<data_row_filter_inputs_T<Val>[]|undefined>
export { data_rows_filter_inputs__ as data_rows_filter_inputs$_ }
