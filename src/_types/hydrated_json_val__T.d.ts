import type { dehydrated_data_row_tuple_T } from './data_row_T'
import type { dehydrated_json_val_T } from './dehydrated_json_val_T'
import type { hydrated_json_val_T } from './hydrated_json_val_T'
export type hydrated_json_val__T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = hydrated_json_val_T
> = (
	dehydrated_json_val:dehydrated_json_val_T,
	header:string,
	dehydrated_data_row_tuple:dehydrated_data_row_tuple_T<ColDefs>,
	col_idx:number
)=>D
