import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
export declare function data_highlight_rows__<
	Val extends unknown = unknown
>(ctx:Ctx):data_highlight_rows__T<Val>
export type data_highlight_rows__T<
	Val extends unknown = unknown
> = WritableAtom_<Val[][]|undefined>
export { data_highlight_rows__ as data_highlight_rows$_ }
