import type { tuple__o_T } from './tuple__o_T.js'
export type data_row_o_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
	ColDefs extends [string, any][]
		? tuple__o_T<ColDefs, 0, 1>
		: ColDefs extends any[]
			? {}
			: ColDefs extends object
				? ColDefs
				: never
