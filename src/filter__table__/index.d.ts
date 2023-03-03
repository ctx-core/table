import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { Row } from '../_types'
export function filter__table__<
	Val extends Row = Row
>(ctx:Ctx):ReadableAtom_<filter__table_T<Val>>
export {
	filter__table__ as data_rows_filter_table__,
	filter__table__ as data_rows_filter_table$_,
}
export declare function filter__table_<
	Val extends Row = Row
>(ctx:Ctx):filter__table_T<Val>
export declare function filter__table__set<
	Val extends Row = Row
>(ctx:Ctx, filter__table:filter__table_T<Val>):void
export type filter__table_T<
	Val extends Row = Row
> = Record<string, Val>|null
export declare type data_rows_filter_table_T<
	Val extends Row = Row
> = filter__table_T<Val>
