import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
export declare function table_data_highlight_rows__<
	Val extends unknown = unknown
>(ctx:Ctx):table_data_highlight_rows__T<Val>
export type table_data_highlight_rows_T<
	Val extends unknown = unknown
> = Record<string, Val[]>
export type table_data_highlight_rows__T<
	Val extends unknown = unknown
> = WritableAtom_<table_data_highlight_rows_T<Val>|undefined>
export { table_data_highlight_rows__ as table_data_highlight_rows$_ }
