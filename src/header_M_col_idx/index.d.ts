import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { be__params_T, Ctx } from '@ctx-core/object'
import type { column_a_T, header_M_col_idx_T } from '../_types'
export declare function header_M_col_idx__<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx, opts?:be__params_T):ReadableAtom_<header_M_col_idx_T<ColDefs>>
export declare function header_M_col_idx_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx):header_M_col_idx_T<ColDefs>
export declare function header_M_col_idx_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(column_a:column_a_T<ColDefs>):header_M_col_idx_T<ColDefs>
export declare function header_M_col_idx_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	ctx_or_column_a:Ctx|column_a_T<ColDefs>
):header_M_col_idx_T<ColDefs>
export declare function header_M_col_idx__set<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	ctx:Ctx,
	column_M_column_idx:header_M_col_idx_T<ColDefs>
):void
export declare function header_M_col_idx__new<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(column_a:column_a_T<ColDefs>):header_M_col_idx_T<ColDefs>
