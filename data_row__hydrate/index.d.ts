import type {
	data_row_T,
	dehydrated_json_data_row_tuple_T,
	dehydrated_json_val_T,
	header_M_col_idx_T,
	header_row_T,
	hydrated_json_val_T,
	val__hydrate_T
} from '../_types/index.js'
export declare function data_row__hydrate<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T,
	H = hydrated_json_val_T
>(
	dehydrated_data_row_tuple:dehydrated_json_data_row_tuple_T<ColDefs>,
	header_row_or_header_M_col_idx:header_row_T<ColDefs>|header_M_col_idx_T<ColDefs>,
	val__hydrate?:val__hydrate_T<ColDefs, D, H>
):data_row_T<ColDefs>
