import type { dehydrated_table_T, hydrated_val__T, hydrated_json_val_T, table_T } from '../_types'
import { dehydrated_json_val_T } from '../_types'
export declare function table__hydrate<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T,
	H = hydrated_json_val_T
>(
	dehydrated_table:dehydrated_table_T<ColDefs>,
	val__hydrate?:hydrated_val__T<ColDefs, D, H>
):table_T<ColDefs>
