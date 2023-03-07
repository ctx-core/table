import type { data_row_T, data_row_tuple_T } from '../_types'
import type { column_M_row_idx_T } from '../column_M_row_idx'
export declare function data_row_<
	ColDefs extends (([string, any][])|any[]|object)
>(
	datum_a:data_row_tuple_T<ColDefs>,
	column_M_column_idx:column_M_row_idx_T<ColDefs>
):data_row_T<ColDefs>|undefined
export {
	data_row_ as _row_proxy,
	data_row_ as _proxy__row,
}
