import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { be__opts_T, Ctx } from '@ctx-core/object'
import type { data_row_T } from '../_types'
export declare function data_row_M_data_row_a_idx__<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx, opts?:be__opts_T):ReadableAtom_<data_row_M_data_row_a_idx_T<ColDefs>>
export {
	data_row_M_data_row_a_idx__ as row_M_row_idx__,
}
export declare function data_row_M_data_row_a_idx_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx):data_row_M_data_row_a_idx_T<ColDefs>
export declare function data_row_M_data_row_a_idx_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(data_row_a:data_row_T<ColDefs>[]):data_row_M_data_row_a_idx_T<ColDefs>
export {
	data_row_M_data_row_a_idx_ as row_M_row_idx_,
}
export declare function data_row_M_data_row_a_idx__set<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx, row_M_row_idx:data_row_M_data_row_a_idx_T<ColDefs>):void
export {
	data_row_M_data_row_a_idx__set as row_M_row_idx__set,
}
export declare function data_row_M_data_row_a_idx__new<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(data_row_a:data_row_T<ColDefs>[]):data_row_M_data_row_a_idx_T<ColDefs>
export type data_row_M_data_row_a_idx_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = Map<data_row_T<ColDefs>, number>
export declare type row_M_row_idx_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = data_row_M_data_row_a_idx_T<ColDefs>
