import type { column_T } from './column_T'
export type header_M_col_idx_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = Map<column_T<ColDefs>, number>
