import { be_ } from '@ctx-core/object'
import type { table$_T } from './table$_b'
import type { data_highlight_rows$_T } from './data_highlight_rows$_b'
import type { data_rows$_T } from './data_rows$_b'
import type { rows$_T } from './rows$_b'
import type { data_rows_filter_inputs$_T } from './data_rows_filter_inputs$_b'
import type { table_data_highlight_rows$_T } from './table_data_highlight_rows$_b'
import type { data_rows_filter_table$_T } from './data_rows_filter_table$_b'
import type { row$_T } from './row$_b'
import type { rank_table$_T } from './rank_table$_b'
import type { column_offsets$_T } from './column_offsets$_b'
import type { columns$_T } from './columns$_b'
import type { reverse_columns$_T } from './reverse_columns$_b'
import type { row_id$_T } from './row_id$_b'
import type { set_row_T } from './set_row_b'
import type { table_domain$_T } from './table_domain$_b'
import type { ticks_domain$_T } from './ticks_domain$_b'
import { column_offsets$_b } from './column_offsets$_b'
import { columns$_b } from './columns$_b'
import { data_rows_filter_inputs$_b } from './data_rows_filter_inputs$_b'
import { data_rows_filter_table$_b } from './data_rows_filter_table$_b'
import { reverse_columns$_b } from './reverse_columns$_b'
import { row_id$_b } from './row_id$_b'
import { set_row_b } from './set_row_b'
import { table_domain$_b } from './table_domain$_b'
import { ticks_domain$_b } from './ticks_domain$_b'
import { data_highlight_rows$_b } from './data_highlight_rows$_b'
import { data_rows$_b } from './data_rows$_b'
import { rank_table$_b } from './rank_table$_b'
import { table$_b } from './table$_b'
import { row$_b } from './row$_b'
import { rows$_b } from './rows$_b'
import { table_data_highlight_rows$_b } from './table_data_highlight_rows$_b'
export interface table_Ctx<Val extends unknown = unknown> {
	column_offsets$?:column_offsets$_T
	columns$?:columns$_T
	data_highlight_rows$?:data_highlight_rows$_T<Val>
	data_rows$?:data_rows$_T<Val>
	data_rows_filter_inputs$?:data_rows_filter_inputs$_T<Val>
	data_rows_filter_table$?:data_rows_filter_table$_T<Val>
	rank_table$?:rank_table$_T<Val>
	reverse_columns$?:reverse_columns$_T
	row_id$?:row_id$_T
	row$?:row$_T<Val>
	rows$?:rows$_T<Val>
	table$?:table$_T<Val>
	table_data_highlight_rows$?:table_data_highlight_rows$_T<Val>,
	set_row?:set_row_T
	table_domain$?:table_domain$_T
	ticks_domain$?:ticks_domain$_T
	table_b_h?:table_b_h_T
}
export interface table_b_h_T<Val extends unknown = unknown> {
	get column_offsets$():column_offsets$_T
	get columns$():columns$_T
	get data_highlight_rows$():data_highlight_rows$_T<Val>
	get data_rows$():data_rows$_T<Val>
	get data_rows_filter_inputs$():data_rows_filter_inputs$_T
	get data_rows_filter_table$():data_rows_filter_table$_T
	get rank_table$():rank_table$_T<Val>
	get reverse_columns$():reverse_columns$_T
	get row$():row$_T<Val>
	get row_id$():row_id$_T
	get rows$():rows$_T<Val>
	get set_row():set_row_T
	get table$():table$_T<Val>
	get table_data_highlight_rows$():table_data_highlight_rows$_T<Val>
	get table_domain$():table_domain$_T
	get ticks_domain$():ticks_domain$_T
}
export function table_b_h_b(ctx:table_Ctx):table_b_h_T {
	return be_<table_Ctx, 'table_b_h'>('table_b_h', ()=>{
		return {
			get column_offsets$() { return column_offsets$_b(ctx) },
			get columns$() { return columns$_b(ctx) },
			get data_highlight_rows$() { return data_highlight_rows$_b(ctx) },
			get data_rows$() { return data_rows$_b(ctx) },
			get data_rows_filter_inputs$() { return data_rows_filter_inputs$_b(ctx) },
			get data_rows_filter_table$() { return data_rows_filter_table$_b(ctx) },
			get rank_table$() { return rank_table$_b(ctx) },
			get reverse_columns$() { return reverse_columns$_b(ctx) },
			get row$() { return row$_b(ctx) },
			get row_id$() { return row_id$_b(ctx) },
			get rows$() { return rows$_b(ctx) },
			get set_row() { return set_row_b(ctx) },
			get table$() { return table$_b(ctx) },
			get table_data_highlight_rows$() { return table_data_highlight_rows$_b(ctx) },
			get table_domain$() { return table_domain$_b(ctx) },
			get ticks_domain$() { return ticks_domain$_b(ctx) },
		}
	})(ctx)
}
