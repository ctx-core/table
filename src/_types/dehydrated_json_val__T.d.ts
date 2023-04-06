import type { dehydrated_json_val_T } from './dehydrated_json_val_T'
import type { hydrated_json_val_T } from './hydrated_json_val_T'
import { data_row_T } from './data_row_T'
export type dehydrated_json_val__T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	R = dehydrated_json_val_T
> = (
	hydrated_json_val:hydrated_json_val_T,
	header:string,
	data_row:data_row_T<ColDefs>,
	idx:number
)=>R
