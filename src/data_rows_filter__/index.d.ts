import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
import type { data_rows__T } from '../data_rows__'
export declare function data_rows_filter__<
	Val extends unknown = unknown
>(ctx:Ctx):data_rows__T<Val>
declare const _data_rows_filter__:Be<data_rows__T, Ctx>
export type data_rows_filter__T<
	Val extends unknown = unknown
> = ReadableAtom_<Val[][]>
export { _data_rows_filter__ as _data_rows_filter$_ }
