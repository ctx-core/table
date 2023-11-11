import type {
	data_row_T,
	dehydrated_json_data_row_tuple_T,
	dehydrated_json_val_T,
	val__dehydrate_T
} from '../_types/index.js'
export declare function data_row__dehydrate<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T
>(
	data_row:data_row_T<ColDefs>,
	dehydrated_val_?:val__dehydrate_T<ColDefs, D>
):dehydrated_json_data_row_tuple_T<ColDefs>
