import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
export declare function data_highlight_row_a__<
	Val extends unknown = unknown
>(ctx:Ctx):data_highlight_row_a__T<Val>
export {
	data_highlight_row_a__ as data_highlight_rows__,
	data_highlight_row_a__ as data_highlight_rows$_,
}
export declare function data_highlight_rows_<
	Val extends unknown = unknown
>(ctx:Ctx):data_highlight_row_a__T<Val>
export declare function data_highlight_row_a__set<
	Val extends unknown = unknown
>(ctx:Ctx, data_highlight_row_a:Val[][]):void
export type data_highlight_row_a__T<
	Val extends unknown = unknown
> = WritableAtom_<Val[][]|undefined>
export declare type data_highlight_rows__T<
	Val extends unknown = unknown
> = data_highlight_row_a__T<Val>
