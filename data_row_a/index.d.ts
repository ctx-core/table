import type { ctx_T } from 'ctx-core/be'
import type { memo_T } from 'ctx-core/rmemo'
import type { data_row_T, data_row_tuple_T, header_M_col_idx_T, header_row_T } from '../_types/index.js'
export declare function data_row_a$_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:ctx_T):memo_T<data_row_T<ColDefs>[]>
export declare function data_row_a_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:ctx_T):data_row_T<ColDefs>[]
export declare function data_row_a_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	data_row_tuple_a:data_row_tuple_T<ColDefs>[],
	header_row:header_row_T<ColDefs>
):data_row_T<ColDefs>[]
export declare function data_row_a_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	data_row_tuple_a:data_row_tuple_T<ColDefs>[],
	header_M_col_idx:header_M_col_idx_T<ColDefs>
):data_row_T<ColDefs>[]
export declare function data_row_a_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	ctx_or_data_tuple_a:ctx_T|data_row_tuple_T[],
	header_row_or_header_M_col_idx?:header_row_T|header_M_col_idx_T
):data_row_T<ColDefs>[]
export declare function data_row_a__set<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:ctx_T, row:data_row_T<ColDefs>[]):void
export declare function data_row_a__new<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	data_row_tuple_a:data_row_tuple_T<ColDefs>[],
	header_row:header_row_T<ColDefs>
):data_row_T<ColDefs>[]
export declare function data_row_a__new<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	data_row_tuple_a:data_row_tuple_T<ColDefs>[],
	header_M_col_idx:header_M_col_idx_T<ColDefs>
):data_row_T<ColDefs>[]
