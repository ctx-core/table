import type { dehydrated_json_val_T, dehydrated_table_T, table_T, val__dehydrate_T } from '../_types/index.js'
export declare function table__dehydrate<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T
>(
	table:table_T<ColDefs>,
	val__dehydrate?:val__dehydrate_T<ColDefs, D>
):dehydrated_table_T<ColDefs>
