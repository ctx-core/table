import type { data_row__sym_props_o_T } from './data_row__sym_props_o_T.js'
import type { data_row_o_T } from './data_row_o_T.js'
import type { row_T } from './row_T.js'
import type { ValueOf } from './ValueOf.js'
export type data_row_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> =
	data_row_tuple_T<ColDefs>
	&data_row_o_T<ColDefs>
	&data_row__sym_props_o_T<ColDefs>
	&row_T<ColDefs>
export type Row<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> = data_row_T<ColDefs>
export type data_row_tuple_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> =
	row_T<ColDefs>
	&(ColDefs extends [string, unknown][]
	? {
		[K in keyof ColDefs]:
		ColDefs[K] extends [string, unknown]
			? ColDefs[K][1]
			: never
	}
	: ColDefs extends unknown[]
		? ColDefs
		: ColDefs extends object
			? ValueOf<ColDefs>[]
			: string[])
// This behavior may change as the dehydration api is refined
export type dehydrated_data_row_tuple_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> = data_row_tuple_T<ColDefs>
export type dehydrated_json_data_row_tuple_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> =
	(ColDefs extends [string, unknown][]
		? {
			[K in keyof ColDefs]:
			ColDefs[K] extends [string, unknown]
				? ColDefs[K][1] extends Date
					? string
					: ColDefs[K][1]
				: never
		}
		: ColDefs extends unknown[]
			? {
				[K in keyof ColDefs]:
				ColDefs[K] extends [string, unknown]
					? ColDefs[K][1] extends Date
						? string
						: ColDefs[K][1]
					: never
			}
			: ColDefs extends object
				? Exclude<ValueOf<ColDefs>, Date>[]
				: string[])
