import type { data_row_T, dehydrated_data_row_tuple_T } from './data_row_T.js'
import type { header_row_T } from './header_row_T.js'
export interface table_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> {
	header_row:header_row_T<ColDefs>
	data_row_a:data_row_T<ColDefs>[]
}
export interface dehydrated_table_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> {
	header_row:header_row_T<ColDefs>
	data_row_a:dehydrated_data_row_tuple_T<ColDefs>[]
}
export type unhydrated_table_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> = dehydrated_table_T<ColDefs>
