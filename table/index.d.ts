import type { ctx_T } from 'ctx-core/be'
import type { memo_T } from 'ctx-core/rmemo'
import type { data_row_T, header_row_T, table_T } from '../_types/index.js'
export declare function table$_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:ctx_T):memo_T<table_T<ColDefs>>
export { table$_ as table__ }
export declare function table_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:ctx_T):table_T<ColDefs>
export declare function table_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	data_row_a:data_row_T<ColDefs>[],
	header_row:header_row_T<ColDefs>
):table_T<ColDefs>
export declare function table_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	ctx_or_data_row_a:ctx_T|data_row_T<ColDefs>[],
	header_row?:header_row_T<ColDefs>
):table_T<ColDefs>
export declare function table__set<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(ctx:ctx_T, table:table_T<ColDefs>):void
export declare function table__new<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	data_row_a:data_row_T<ColDefs>[],
	header_row:header_row_T<ColDefs>
):table_T<ColDefs>
