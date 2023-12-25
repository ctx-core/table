import type { row_T } from './row_T.js'
export type header_row_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> =
	row_T<ColDefs>
	&(ColDefs extends [string, unknown][]
	? {
		[K in keyof ColDefs]:
		ColDefs[K] extends [string, unknown]
			? ColDefs[K][0]
			: never
	}
	: ColDefs extends unknown[]
		? ColDefs
		: ColDefs extends object
			? (keyof ColDefs)[]
			: string[])
