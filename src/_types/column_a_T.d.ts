import type { column_T } from './column_T'
import type { header_row_T } from './header_row_T'
export type column_a_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = column_T<ColDefs>[]|header_row_T<ColDefs>
