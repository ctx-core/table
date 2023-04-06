import type { data_row_T, dehydrated_json_data_row_tuple_T, dehydrated_val__T, dehydrated_json_val_T } from '../_types'
export declare function data_row__dehydrate<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T
>(
	data_row:data_row_T<ColDefs>,
	dehydrated_val_?:dehydrated_val__T<ColDefs, D>
):dehydrated_json_data_row_tuple_T<ColDefs>
