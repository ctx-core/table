import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { Row } from '../_types'
export declare function table__<
	Val extends unknown = unknown
>(ctx:Ctx):WritableAtom_<table_T<Val>>
export interface table_T<
	Val extends unknown = unknown
> {
	column_a:string[]
	row_a:Row<Val>[]
}
export type table_T<
	Val extends unknown = unknown
> = [string[]?, ...Val[][]]
export declare function table_<
	Val extends unknown = unknown
>(ctx:Ctx):table_T<Val>
export declare function table__set<
	Val extends unknown = unknown
>(ctx:Ctx, table:table_T<Val>):void
