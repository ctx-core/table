import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
export declare function table__<
	Val extends unknown = unknown
>(ctx:Ctx):table__T<Val>
export type table_T<
	Val extends unknown = unknown
> = [string[]?, ...Val[][]]
export type table__T<
	Val extends unknown = unknown
> = WritableAtom_<table_T<Val>>
export { table__ as table$_ }
export declare function table_<
	Val extends unknown = unknown
>(ctx:Ctx):table_T<Val>
export declare function table__set<
	Val extends unknown = unknown
>(ctx:Ctx, table:table_T<Val>):void
