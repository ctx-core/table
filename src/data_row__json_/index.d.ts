import type { json_T } from '@ctx-core/types'
import type { data_row_T, dehydrated_json_val__T, dehydrated_json_val_T } from '../_types'
export declare function data_row__json_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	R = dehydrated_json_val_T
>(
	data_row:data_row_T<ColDefs>,
	dehydrated_json_val_?:dehydrated_json_val__T<ColDefs, R>
):json_T
