import type { dehydrated_json_data_row_tuple_T } from './data_row_T.js'
import type { dehydrated_json_val_T } from './dehydrated_json_val_T.js'
import type { hydrated_json_val_T } from './hydrated_json_val_T.js'
export type val__hydrate_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object,
	D = dehydrated_json_val_T,
	H = hydrated_json_val_T
> = (
	dehydrated_val:D,
	header:hydrated_val__header_T<ColDefs>,
	dehydrated_data_row_tuple:dehydrated_json_data_row_tuple_T<ColDefs>,
	col_idx:number
)=>H
export type hydrated_val__T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object,
	D = dehydrated_json_val_T,
	H = hydrated_json_val_T
> = val__hydrate_T<ColDefs, D, H>
export type hydrated_val__header_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> =
	ColDefs extends [string, unknown][]
		? ColDefs[keyof ColDefs] extends [string, unknown]
			? ColDefs[keyof ColDefs][1]
			: never
		: ColDefs extends unknown[]
			? ColDefs[keyof ColDefs] extends unknown[]
				? ColDefs[keyof ColDefs][1]
				: never
			: ColDefs extends object
				? keyof ColDefs
				: string
export type hydrated_json_val__T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object,
	D = dehydrated_json_val_T,
	H = hydrated_json_val_T
> = val__hydrate_T<ColDefs, D, H>
