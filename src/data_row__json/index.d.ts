import type { json_T } from '@ctx-core/types'
import type { data_row_T, dehydrated_json_val_T, val__dehydrate_T } from '../_types'
export declare function data_row__json__new<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T
>(
	data_row:data_row_T<ColDefs>,
	dehydrated_val_?:val__dehydrate_T<ColDefs, D>
):json_T
export { data_row__json__new as data_row__json_ }