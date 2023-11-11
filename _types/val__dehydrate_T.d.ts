import type { data_row_T } from './data_row_T.js'
import type { dehydrated_json_val_T } from './dehydrated_json_val_T.js'
import type { ValueOf } from './ValueOf.js'
export type val__dehydrate_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T
> = (
	hydrated_json_val:ValueOf<data_row_T<ColDefs>>,
	header:string,
	data_row:data_row_T<ColDefs>,
	col_idx:number
)=>D
export type dehydrated_val__T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T
> = val__dehydrate_T<ColDefs, D>
