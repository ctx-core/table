import type { dehydrated_table_T, hydrated_json_val__T, hydrated_json_val_T, table_T } from '../_types'
export declare function table__hydrate<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	H = hydrated_json_val_T
>(
	dehydrated_table:dehydrated_table_T<ColDefs>,
	val__hydrate?:hydrated_json_val__T<ColDefs, H>
):table_T<ColDefs>
