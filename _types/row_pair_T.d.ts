import type { data_row_T } from './data_row_T.js'
import type { header_row_T } from './header_row_T.js'
export type row_pair_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = [data_row_T<ColDefs>, header_row_T<ColDefs>]
