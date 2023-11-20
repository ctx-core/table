import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { header_M_col_idx_T, header_row_T } from '../_types/index.js'
export declare function header_M_col_idx$_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:Ctx):ReadableAtom_<header_M_col_idx_T<ColDefs>>
export declare function header_M_col_idx_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:Ctx):header_M_col_idx_T<ColDefs>
export declare function header_M_col_idx_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(header_row:header_row_T<ColDefs>):header_M_col_idx_T<ColDefs>
export declare function header_M_col_idx_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	ctx_or_header_row:Ctx|header_row_T<ColDefs>
):header_M_col_idx_T<ColDefs>
export declare function header_M_col_idx__set<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	ctx:Ctx,
	header_M_col_idx:header_M_col_idx_T<ColDefs>
):void
export declare function header_M_col_idx__new<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	header_row:header_row_T<ColDefs>
):header_M_col_idx_T<ColDefs>
