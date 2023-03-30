import type { data_row_T, data_row_tuple_T, header_M_col_idx_T, header_row_T } from '../_types'
import { data_row_o_T } from '../_types'
export declare function data_row_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	data_row_tuple:data_row_tuple_T<ColDefs>,
	header_row:header_row_T<ColDefs>
):data_row_T<ColDefs>
export declare function data_row_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	data_row_tuple:data_row_tuple_T<ColDefs>,
	header_M_col_idx:header_M_col_idx_T<ColDefs>
):data_row_T<ColDefs>
export declare function data_row_o_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(data_row:data_row_T<ColDefs>):data_row_o_T<ColDefs>
