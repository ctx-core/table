import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { be__opts_T, Ctx } from '@ctx-core/object'
import type { column_a_T, header_M_row_idx_T } from '../_types'
export declare function header_M_row_idx__<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx, opts?:be__opts_T):ReadableAtom_<header_M_row_idx_T<ColDefs>>
export {
	header_M_row_idx__ as column_M_row_idx__,
	header_M_row_idx__ as column_M_column_idx__,
}
export declare function header_M_row_idx_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx):header_M_row_idx_T<ColDefs>
export {
	header_M_row_idx_ as column_M_column_idx_,
}
export declare function header_M_row_idx_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(column_a:column_a_T<ColDefs>):header_M_row_idx_T<ColDefs>
export declare function header_M_row_idx__set<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	ctx:Ctx,
	column_M_column_idx:header_M_row_idx_T<ColDefs>
):void
export {
	header_M_row_idx__set as column_M_column_idx__set,
}
export declare function header_M_row_idx__new<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(column_a:column_a_T<ColDefs>):header_M_row_idx_T<ColDefs>
