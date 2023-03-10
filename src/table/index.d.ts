import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { data_row_T, header_row_T } from '../_types'
export declare function table__<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx):WritableAtom_<table_T<ColDefs>>
export declare function table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx):table_T<ColDefs>
export declare function table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	data_row_a:data_row_T<ColDefs>[],
	header_row:header_row_T<ColDefs>
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
export interface table_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> {
	header_row:header_row_T<ColDefs>
	// data_row_a may be null for on_data_row processing. See @ctx-core/csv > csv__table_
	data_row_a:data_row_T<ColDefs>[]
}
