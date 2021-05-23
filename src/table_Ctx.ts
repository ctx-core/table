import type { falsy } from '@ctx-core/function'
import type { table_T } from './table_b'
import type { Readable$ } from '@ctx-core/store'
import type { columns_T } from './columns_b'
import type { data_highlight_rows_T } from './data_highlight_rows_b'
import type { data_rows_T } from './data_rows_b'
import type { rows_T } from './rows_b'
import type { rows_data_filter_inputs_T } from './rows_data_filter_inputs_b'
import type { $table_T } from './table_b'
import type { Writable$ } from '@ctx-core/store'
import type { Row } from './Row'
import type { table_data_highlight_rows_maybe_T } from './table_data_highlight_rows_b'
import type { table_domain_T } from './table_domain_b'
import type { ticks_domain_T } from './ticks_domain_b'
export interface table_Ctx<Val extends unknown = unknown> {
	columns?:columns_T
	column_offsets?:Readable$<Record<string, number>>
	data_highlight_rows?:data_highlight_rows_T<Val>
	data_rows?:data_rows_T<Val>
	rank_table?:Readable$<$table_T<Val>|undefined>
	reverse_columns?:columns_T
	row?:Writable$<Row<Val>|undefined>
	row_id?:Writable$<number|undefined>
	rows?:rows_T<Val>
	rows_data_filter_inputs?:rows_data_filter_inputs_T<Val>
	rows_data_filter_table?:Readable$<falsy|Record<string, Val>[]>
	set_row?:()=>void
	table?:table_T<Val>
	table_data_highlight_rows?:table_data_highlight_rows_maybe_T<Val>
	table_domain?:table_domain_T
	ticks_domain?:ticks_domain_T
}
