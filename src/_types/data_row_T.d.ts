import type { data_row__sym_props_o_T } from './data_row__sym_props_o_T'
import type { data_row_o_T } from './data_row_o_T'
import type { row_T } from './row_T'
export type data_row_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
	data_row_tuple_T<ColDefs>
	&data_row_o_T<ColDefs>
	&data_row__sym_props_o_T<ColDefs>
	&row_T<ColDefs>
export type Row<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = data_row_T<ColDefs>
export type data_row_tuple_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
	row_T<ColDefs>
	&(ColDefs extends [string, any][]
		? { [K in keyof ColDefs]:ColDefs[K][1] }
		: ColDefs extends any[]
			? ColDefs
			: ColDefs extends object
				? ValueOf<ColDefs>[]
				: string[])
export type dehydrated_data_row_tuple_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
	row_T<ColDefs>
	&(ColDefs extends [string, any][]
		? {
			[K in keyof ColDefs]:
			ColDefs[K][1] extends Date
			? string
			: ColDefs[K][1]
		}
		: ColDefs extends any[]
			? {
				[K in keyof ColDefs]:
				ColDefs[K][1] extends Date
				? string
				: ColDefs[K][1]
			}
			: ColDefs extends object
				? Exclude<ValueOf<ColDefs>, Date>[]
				: string[])
