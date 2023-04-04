import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { be__params_T, Ctx } from '@ctx-core/object'
import type { column_a_T, header_row_T } from '../_types'
declare function header_row__<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx, opts?:be__params_T):ReadableAtom_<header_row_T<ColDefs>>
declare function header_row_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx):header_row_T<ColDefs>
declare function header_row_<
	ColDefs extends any[]
>(
	column_a_OR_length:column_a_T<ColDefs>|number
):header_row_T<ColDefs>
export declare function header_row_<
	ColDefs extends any[]
>(
	ctx_or_column_a_or_length:Ctx|column_a_T<ColDefs>|number
):header_row_T<ColDefs>
export declare function header_row__set<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx, column_a:header_row_T<ColDefs>):void
export declare function header_row__new<
	ColDefs extends any[]|object
>(column_a_OR_length:string[]|number[]|number):header_row_T<ColDefs>
