import type { Ctx } from 'ctx-core/be'
import type { memo_T } from 'ctx-core/rmemo'
import type { column_a_T, header_row_T } from '../_types/index.js'
export declare function header_row$_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:Ctx):memo_T<header_row_T<ColDefs>>
export { header_row$_ as header_row__ }
export declare function header_row_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:Ctx):header_row_T<ColDefs>
export declare function header_row_<
	ColDefs extends unknown[]
>(
	column_a_OR_length:column_a_T<ColDefs>|number
):header_row_T<ColDefs>
export declare function header_row_<
	ColDefs extends unknown[]
>(
	ctx_or_column_a_or_length:Ctx|column_a_T<ColDefs>|number
):header_row_T<ColDefs>
export declare function header_row__set<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:Ctx, column_a:header_row_T<ColDefs>):void
export declare function header_row__new<
	ColDefs extends unknown[]|object
>(column_a_OR_length:string[]|number[]|number):header_row_T<ColDefs>
