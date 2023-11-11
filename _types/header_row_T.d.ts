import type { row_T } from './row_T.js'
export type header_row_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
	row_T<ColDefs>
	&(ColDefs extends [string, any][]
	? {
		[K in keyof ColDefs]:
		ColDefs[K] extends [string, any]
			? ColDefs[K][0]
			: never
	}
	: ColDefs extends any[]
		? ColDefs
		: ColDefs extends object
			? (keyof ColDefs)[]
			: string[])
