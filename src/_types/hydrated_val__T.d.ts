import type { dehydrated_json_data_row_tuple_T } from './data_row_T'
import type { hydrated_json_val_T } from './hydrated_json_val_T'
export type hydrated_val__T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = hydrated_json_val_T
> = (...arg_a:hydrated_val___arg_a_T<ColDefs>)=>D
export type hydrated_val___arg_a_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
	ColDefs extends [string, any][]
	? [
		ValueOf<ColDefs>[0],
		ValueOf<ColDefs>[1],
		dehydrated_json_data_row_tuple_T<ColDefs>,
		number]
	: ColDefs extends any[]
		? [
			ValueOf<ColDefs>[0],
			ValueOf<ColDefs>[1],
			dehydrated_json_data_row_tuple_T<ColDefs>,
			number]
		: ColDefs extends object
			? [
				ColDefs[keyof ColDefs],
				keyof ColDefs,
				dehydrated_json_data_row_tuple_T<ColDefs>,
				number]
			: never
export type hydrated_json_val__T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = hydrated_json_val_T
> = hydrated_val__T<ColDefs, D>
