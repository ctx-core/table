import type { data_row_T, data_row_tuple_T, header_M_row_idx_T, header_row_T } from '../_types'
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
	header_M_row_idx:header_M_row_idx_T<ColDefs>
):data_row_T<ColDefs>
export {
	data_row_ as _row_proxy,
	data_row_ as _proxy__row,
}
