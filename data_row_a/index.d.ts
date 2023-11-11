import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { data_row_T, data_row_tuple_T, header_M_col_idx_T, header_row_T } from '../_types/index.js'
export declare function data_row_a__<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx):ReadableAtom_<data_row_T<ColDefs>[]>
export declare function data_row_a_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx):data_row_T<ColDefs>[]
export declare function data_row_a_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	data_row_tuple_a:data_row_tuple_T<ColDefs>[],
	header_row:header_row_T<ColDefs>
):data_row_T<ColDefs>[]
export declare function data_row_a_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	data_row_tuple_a:data_row_tuple_T<ColDefs>[],
	header_M_col_idx:header_M_col_idx_T<ColDefs>
):data_row_T<ColDefs>[]
export declare function data_row_a_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	ctx_or_data_tuple_a:Ctx|data_row_tuple_T[],
	header_row_or_header_M_col_idx?:header_row_T|header_M_col_idx_T
):data_row_T<ColDefs>[]
export declare function data_row_a__set<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx, row:data_row_T<ColDefs>[]):void
export declare function data_row_a__new<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	data_row_tuple_a:data_row_tuple_T<ColDefs>[],
	header_row:header_row_T<ColDefs>
):data_row_T<ColDefs>[]
export declare function data_row_a__new<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	data_row_tuple_a:data_row_tuple_T<ColDefs>[],
	header_M_col_idx:header_M_col_idx_T<ColDefs>
):data_row_T<ColDefs>[]