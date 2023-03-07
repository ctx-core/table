import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { be__opts_T, Ctx } from '@ctx-core/object'
import type { column_a_T, column_T } from '../_types'
export declare function column_M_row_idx__<
	ColDefs extends (([string, any][])|any[]|object)
>(ctx:Ctx, opts?:be__opts_T):ReadableAtom_<column_M_row_idx_T<ColDefs>>
export {
	column_M_row_idx__ as column_M_column_idx__,
}
export declare function column_M_row_idx_<
	ColDefs extends (([string, any][])|any[]|object)
>(ctx:Ctx):column_M_row_idx_T<ColDefs>
export {
	column_M_row_idx_ as column_M_column_idx_,
}
export declare function column_M_row_idx_<
	ColDefs extends (([string, any][])|any[]|object)
>(column_a:column_a_T<ColDefs>):column_M_row_idx_T<ColDefs>
export declare function column_M_row_idx__set<
	ColDefs extends (([string, any][])|any[]|object)
>(
	ctx:Ctx,
	column_M_column_idx:column_M_row_idx_T<ColDefs>
):void
export {
	column_M_row_idx__set as column_M_column_idx__set,
}
export declare function column_M_row_idx__new<
	ColDefs extends (([string, any][])|any[]|object)
>(column_a:column_a_T<ColDefs>):column_M_row_idx_T<ColDefs>
export type column_M_row_idx_T<
	ColDefs extends (([string, any][])|any[]|object)
> = Map<column_T<ColDefs>, number>
export type column_M_column_idx_T<
	ColDefs extends (([string, any][])|any[]|object)
> = column_M_row_idx_T<ColDefs>
