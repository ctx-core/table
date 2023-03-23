import type { tuple__o_T } from './tuple__o_T'
import { data_row__sym_props_o_T } from './data_row__sym_props_o_T'
export type data_row_o_T<
	ColDefs extends [string, any][]
> = tuple__o_T<ColDefs, 0, 1>&data_row__sym_props_o_T<ColDefs>
