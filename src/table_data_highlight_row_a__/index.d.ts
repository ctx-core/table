import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
export declare function table_data_highlight_row_a__<
	Val extends unknown = unknown
>(ctx:Ctx):WritableAtom_<table_data_highlight_row_a_T<Val>|undefined>
export {
	table_data_highlight_row_a__ as table_data_highlight_rows__,
	table_data_highlight_row_a__ as table_data_highlight_rows$_,
}
export declare function table_data_highlight_row_a_<
	Val extends unknown = unknown
>(ctx:Ctx):table_data_highlight_row_a_T<Val>|undefined
export declare function table_data_highlight_row_a__set<
	Val extends unknown = unknown
>(ctx:Ctx, table_data_highlight_row_a:table_data_highlight_row_a_T<Val>):void
export type table_data_highlight_row_a_T<
	Val extends unknown = unknown
> = Record<string, Val[]>
export type table_data_highlight_rows_T<
	Val extends unknown = unknown
> = table_data_highlight_row_a_T<Val>
