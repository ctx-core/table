import type { data_row_o_T } from './data_row_o_T'
import type { data_row_tuple_T } from './data_row_tuple_T'
export type data_row_T<
	ColDefs extends (([string, any][])|any[]|object)
> =
	ColDefs extends [string, any][]
	? data_row_tuple_T<ColDefs>&data_row_o_T<ColDefs>
	: ColDefs extends any[]
		? data_row_tuple_T<ColDefs>
		: ColDefs extends object
			? data_row_tuple_T<ColDefs>&data_row_o_T<ColDefs>
			: never
export type Row<
	ColDefs extends (([string, any][])|any[]|object)
> = data_row_T<ColDefs>
export type data_row_tuple_T<
	ColDefs extends (([string, any][])|any[]|object)
> =
	ColDefs extends [string, any][]
	? { [K in keyof ColDefs]:ColDefs[K][1] }
	: ColDefs extends any[]
		? ColDefs
		: ColDefs extends object
			? { [K in keyof ColDefs]:ColDefs[K][1] }
			: never
