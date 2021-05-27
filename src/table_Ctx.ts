import type { table_T } from './table_b'
import type { columns_T } from './columns_b'
import type { data_highlight_rows_T } from './data_highlight_rows_b'
import type { data_rows_T } from './data_rows_b'
import type { rows_T } from './rows_b'
import type { rows_data_filter_inputs_T } from './rows_data_filter_inputs_b'
import type { table_data_highlight_rows_maybe_T } from './table_data_highlight_rows_b'
import type { table_domain_T } from './table_domain_b'
import type { ticks_domain_T } from './ticks_domain_b'
import type { rows_data_filter_table_T } from './data_rows_filter_table_b'
import type { row_id_T } from './row_id_b'
import type { row_T } from './row_b'
import type { rank_table_T } from './rank_table_b'
import type { set_row_T } from './set_row_b'
import type { column_offsets_T } from './column_offsets_b'
export interface table_Ctx<Val extends unknown = unknown> {
	columns?:columns_T
	column_offsets?:column_offsets_T
	data_highlight_rows?:data_highlight_rows_T<Val>
	data_rows?:data_rows_T<Val>
	rank_table?:rank_table_T<Val>
	reverse_columns?:columns_T
	row?:row_T<Val>
	row_id?:row_id_T
	rows?:rows_T<Val>
	rows_data_filter_inputs?:rows_data_filter_inputs_T<Val>
	rows_data_filter_table?:rows_data_filter_table_T<Val>
	set_row?:set_row_T
	table?:table_T<Val>
	table_data_highlight_rows?:table_data_highlight_rows_maybe_T<Val>
	table_domain?:table_domain_T
	ticks_domain?:ticks_domain_T
}
