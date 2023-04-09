import type {
	data_row_T,
	dehydrated_json_data_row_tuple_T,
	header_row_T,
	hydrated_json_val_T,
	hydrated_val__T
} from '../_types'
export declare function data_row__hydrate<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = hydrated_json_val_T
>(
	dehydrated_data_row_tuple:dehydrated_json_data_row_tuple_T<ColDefs>,
	header_row_or_header_M_col_idx:header_row_T<ColDefs>|header_M_col_idx<ColDefs>,
	val__hydrate?:hydrated_val__T<ColDefs, D>
):data_row_T<ColDefs>
