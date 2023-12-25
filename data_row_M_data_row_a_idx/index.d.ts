import type { Ctx } from 'ctx-core/be'
import type { memo_T } from 'ctx-core/rmemo'
import type { data_row_T } from '../_types/index.js'
export declare function data_row_M_data_row_a_idx$_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:Ctx):memo_T<data_row_M_data_row_a_idx_T<ColDefs>>
export declare function data_ro_M_data_row_a_idx_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:Ctx):data_row_M_data_row_a_idx_T<ColDefs>
export declare function data_row_M_data_row_a_idx_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(data_row_a:data_row_T<ColDefs>[]):data_row_M_data_row_a_idx_T<ColDefs>
export declare function data_row_M_data_row_a_idx_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	ctx_or_data_row_a:Ctx|data_row_T<ColDefs>[]
):data_row_M_data_row_a_idx_T<ColDefs>
export declare function data_row_M_data_row_a_idx__set<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:Ctx, row_M_row_idx:data_row_M_data_row_a_idx_T<ColDefs>):void
export declare function data_row_M_data_row_a_idx__new<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(data_row_a:data_row_T<ColDefs>[]):data_row_M_data_row_a_idx_T<ColDefs>
export type data_row_M_data_row_a_idx_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> = Map<data_row_T<ColDefs>, number>
export declare type row_M_row_idx_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> = data_row_M_data_row_a_idx_T<ColDefs>
