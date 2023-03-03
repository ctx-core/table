import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { be__opts_T, Ctx } from '@ctx-core/object'
export declare function column_M_column_idx__<
	Val extends unknown = unknown
>(ctx:Ctx, opts?:be__opts_T):ReadableAtom_<Map<string, number>>
export declare function column_M_column_idx_(ctx:Ctx):Map<string, number>
export declare function column_M_column_idx__set(
	ctx:Ctx,
	column_M_column_idx:Map<string, number>
):void
export type column_M_column_idx_T = Map<string, number>
