import type { column_T } from './column_T.js'
import type { header_row_T } from './header_row_T.js'
export type header_M_col_idx_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> = Map<column_T<ColDefs>, number>&{
	get header_row():header_row_T<ColDefs>
}
