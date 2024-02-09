import type { ctx_T } from 'ctx-core/be'
import type { memo_T } from 'ctx-core/rmemo'
import type { header_M_col_idx_T, header_row_T } from '../_types/index.js'
export declare function header_M_col_idx$_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:ctx_T):memo_T<header_M_col_idx_T<ColDefs>>
export declare function header_M_col_idx_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:ctx_T):header_M_col_idx_T<ColDefs>
export declare function header_M_col_idx_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(header_row:header_row_T<ColDefs>):header_M_col_idx_T<ColDefs>
export declare function header_M_col_idx_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	ctx_or_header_row:ctx_T|header_row_T<ColDefs>
):header_M_col_idx_T<ColDefs>
export declare function header_M_col_idx__set<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	ctx:ctx_T,
	header_M_col_idx:header_M_col_idx_T<ColDefs>
):void
export declare function header_M_col_idx__new<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	header_row:header_row_T<ColDefs>
):header_M_col_idx_T<ColDefs>
