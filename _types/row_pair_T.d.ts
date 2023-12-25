import type { data_row_T } from './data_row_T.js'
import type { header_row_T } from './header_row_T.js'
export type row_pair_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> = [data_row_T<ColDefs>, header_row_T<ColDefs>]
