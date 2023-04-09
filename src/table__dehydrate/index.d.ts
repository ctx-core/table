import type { dehydrated_json_val_T, dehydrated_table_T, dehydrated_val__T, table_T } from '../_types'
export declare function table__dehydrate<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T
>(
	table:table_T<ColDefs>,
	val__dehydrate?:dehydrated_val__T<ColDefs, D>
):dehydrated_table_T<ColDefs>
