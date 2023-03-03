import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { table_T } from '../table__'
export declare function rank_table__<
	Val extends unknown = unknown
>(ctx:Ctx):ReadableAtom_<table_T<Val>|undefined>
export {
	rank_table__ as rank_table$_,
	rank_table__ as b__rank__table,
}
export declare function rank_table_(ctx:Ctx):table_T<Val>|undefined
export declare function rank_table__set(ctx:Ctx, rank_table:table_T<Val>):void
