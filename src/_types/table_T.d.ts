import type { data_row_T, data_row_tuple_T, dehydrated_data_row_tuple_T } from './data_row_T'
import type { header_row_T } from './header_row_T'
export interface table_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> {
	header_row:header_row_T<ColDefs>
	data_row_a:data_row_T<ColDefs>[]
}
export interface dehydrated_table_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> {
	header_row:header_row_T<ColDefs>
	data_row_a:dehydrated_data_row_tuple_T<ColDefs>[]
}
export type unhydrated_table_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = dehydrated_table_T<ColDefs>
