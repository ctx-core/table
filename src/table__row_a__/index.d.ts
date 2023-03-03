import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { Row } from '../_types'
export declare function table__row_a__<
	Val extends unknown = unknown
>(ctx:Ctx):ReadableAtom_<Val[][]|undefined>
export {
	table__row_a__ as data_row_a__,
	table__row_a__ as data_rows__,
	table__row_a__ as data_rows$_,
}
export declare function table__row_a_(ctx:Ctx):Val[][]
export declare function data_row_a__set(ctx:Ctx, data_rows:Val[][]):void
export declare function data_row_a__new<
	I extends Row,
	O extends unknown = unknown
>(
	maybe_row_a:I[]|undefined,
	data_column_a:string[],
	column_M_column_idx:Map<string, number>
):O[]|undefined
export {
	data_row_a__new as _data_rows,
	data_row_a__new as _rows__data,
}
