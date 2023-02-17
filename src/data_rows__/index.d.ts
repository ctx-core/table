import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
export declare function data_rows__<
	Val extends unknown = unknown
>(ctx:Ctx):data_rows__T<Val>
export type data_rows__T<
	Val extends unknown = unknown
> = ReadableAtom_<Val[][]|undefined>
export { data_rows__ as data_rows$_ }
