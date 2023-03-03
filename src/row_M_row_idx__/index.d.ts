import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { be__opts_T, Ctx } from '@ctx-core/object'
import type { Row } from '../_types'
export declare function row_M_row_idx__<
	Val extends unknown = unknown
>(ctx:Ctx, opts?:be__opts_T):ReadableAtom_<row_M_row_idx_T<Val>>
export declare function row_M_row_idx_<
	Val extends unknown = unknown
>(ctx:Ctx):row_M_row_idx_T<Val>
export declare function row_M_row_idx__set<
	Val extends unknown = unknown
>(ctx:Ctx, row_M_row_idx:row_M_row_idx_T<Val>):void
export type row_M_row_idx_T<
	Val extends unknown = unknown
> = Map<Row<Val>, number>
