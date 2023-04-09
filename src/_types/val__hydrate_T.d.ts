import type { dehydrated_json_data_row_tuple_T } from './data_row_T'
import type { dehydrated_json_val_T } from './dehydrated_json_val_T'
import type { hydrated_json_val_T } from './hydrated_json_val_T'
export type val__hydrate_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T,
	H = hydrated_json_val_T
> = (
	dehydrated_val:D,
	header:hydrated_val__header_T<ColDefs>,
	dehydrated_data_row_tuple:dehydrated_json_data_row_tuple_T<ColDefs>,
	col_idx:number
)=>H
export type hydrated_val__T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T,
	H = hydrated_json_val_T
> = val__hydrate_T<ColDefs, D, H>
export type hydrated_val__header_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
	ColDefs extends [string, any][]
	? (keyof ColDefs)[1]
	: ColDefs extends any[]
		? (keyof ColDefs)[1]
		: ColDefs extends object
			? keyof ColDefs
			: string
export type hydrated_json_val__T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T,
	H = hydrated_json_val_T
> = val__hydrate_T<ColDefs, D, H>
