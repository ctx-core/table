import type { header_M_row_idx_T } from './header_M_row_idx_T'
export declare const length_sym:unique symbol
export declare const header_M_row_idx_sym:unique symbol
export type data_row__sym_props_o_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = {
	[length_sym]:number
	[header_M_row_idx_sym]:header_M_row_idx_T<ColDefs>
}
