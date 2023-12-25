import type { column_T } from './column_T.js'
import type { header_row_T } from './header_row_T.js'
export type column_a_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> = column_T<ColDefs>[]|header_row_T<ColDefs>
