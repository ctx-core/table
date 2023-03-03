import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import { Row } from '../_types'
export declare function data_row_a__<
	Val extends unknown = unknown
>(ctx:Ctx):data_row_a__T<Val>
export {
	data_row_a__ as data_rows__,
	data_row_a__ as data_rows$_,
}
export declare function data_row_a_(ctx:Ctx):Val[][]
export declare function data_row_a__set(ctx:Ctx, data_rows:Val[][]):void
export declare function data_row_a__new<
	I extends Row,
	O extends unknown = unknown
>(
	maybe_row_a:I[]|undefined,
	data_column_a:string[],
	column_offset_a:Record<string, number>
):O[]|undefined
export {
	data_row_a__new as _data_rows,
	data_row_a__new as _rows__data,
}
export type data_row_a__T<
	Val extends unknown = unknown
> = ReadableAtom_<Val[][]|undefined>
export declare type data_rows__T<
	Val extends unknown = unknown
> = data_row_a__T<Val>
