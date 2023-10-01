import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { data_row_T, header_row_T, table_T } from '../_types'
export declare function table$_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx):WritableAtom_<table_T<ColDefs>>
export { table$_ as table__ }
export declare function table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx):table_T<ColDefs>
export declare function table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	data_row_a:data_row_T<ColDefs>[],
	header_row:header_row_T<ColDefs>
):table_T<ColDefs>
export declare function table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	ctx_or_data_row_a:Ctx|data_row_T<ColDefs>[],
	header_row?:header_row_T<ColDefs>
):table_T<ColDefs>
export declare function table__set<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx, table:table_T<ColDefs>):void
export declare function table__new<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	data_row_a:data_row_T<ColDefs>[],
	header_row:header_row_T<ColDefs>
):table_T<ColDefs>
