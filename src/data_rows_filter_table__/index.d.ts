import type { Ctx } from '@ctx-core/object'
import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Row } from '../_types'
export function data_rows_filter_table__<
	Val extends Row = Row
>(ctx:Ctx):data_rows_filter_table__T<Val>
export { data_rows_filter_table__ as data_rows_filter_table$_ }
export type data_rows_filter_table__T<
	Val extends Row = Row
> = ReadableAtom_<data_rows_filter_table_T<Val>>
export type data_rows_filter_table_T<
	Val extends Row = Row
> = Record<string, Val>|null
