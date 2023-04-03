import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { be__params_T, Ctx } from '@ctx-core/object'
import type { column_a_T, column_T, header_row_T } from '../_types'
export declare function header_row__<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx, opts?:be__params_T):ReadableAtom_<header_row_T<ColDefs>>
export declare function header_row_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx):header_row_T<ColDefs>
export declare function header_row_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(column_a:column_T<ColDefs>[]):header_row_T<ColDefs>
export declare function header_row_<
	ColDefs extends any[]
>(length:number):header_row_T<ColDefs>
export declare function header_row__set<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx, column_a:header_row_T<ColDefs>):void
export declare function header_row__new<
	ColDefs extends [string, any][]|object
>(column_a:string[]):header_row_T<ColDefs>
export declare function header_row__new<
	ColDefs extends any[]|object
>(column_a_or_length:number[]|number):header_row_T<ColDefs>
