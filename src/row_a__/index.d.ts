import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { Row } from '../_types'
import type { table_T } from '../table__'
export declare function row_a__<
	Val extends unknown = unknown
>(ctx:Ctx):ReadableAtom_<Row<Val>[]>
export {
	row_a__ as rows__,
	row_a__ as rows$_,
}
export declare function row_a_<
	Val extends unknown = unknown
>(ctx:Ctx):Row<Val>[]
export declare function row_a__set<
	Val extends unknown = unknown
>(ctx:Ctx, row:Row<Val>[]):void
export declare function row_a__new<
	Val extends unknown = unknown
>(table:table_T, column_M_column_idx:Map<string, number>):Row<Val>[]
