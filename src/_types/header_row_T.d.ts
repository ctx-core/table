import type { row_T } from './row_T'
export type header_row_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
	row_T<ColDefs>
	&(ColDefs extends [string, any][]
		? { [K in keyof ColDefs]:ColDefs[K][0] }
		: ColDefs extends any[]
			? ColDefs
			: ColDefs extends object
				? KeyOf<ColDefs>[]
				: string[])
