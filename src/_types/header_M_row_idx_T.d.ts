import type { column_T } from './column_T'
export type header_M_row_idx_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = Map<column_T<ColDefs>, number>
export type column_M_row_idx_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = header_M_row_idx_T<ColDefs>
export type column_M_column_idx_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = header_M_row_idx_T<ColDefs>
