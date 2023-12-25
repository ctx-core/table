import type { tuple__o_T } from './tuple__o_T.js'
export type data_row_o_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> =
	ColDefs extends [string, unknown][]
		? tuple__o_T<ColDefs, 0, 1>
		: ColDefs extends unknown[]
			? {}
			: ColDefs extends object
				? ColDefs
				: never
