/// <reference types="../_types/index.d.ts" />
import { header_M_col_idx_sym } from '../data_row/index.js'
import { json_val__dehydrate } from '../json_val__dehydrate/index.js'
/**
 * @param {data_row_T}data_row
 * @param {val__dehydrate_T}val__dehydrate
 * @returns {dehydrated_json_data_row_tuple_T}
 * @private
 */
export function data_row__dehydrate(
	data_row,
	val__dehydrate = json_val__dehydrate
) {
	/** @type {header_row_T} */
	const header_row = data_row[header_M_col_idx_sym].header_row
	return data_row.map((hydrated_json_val, col_idx)=>
		val__dehydrate(
			hydrated_json_val,
			header_row[col_idx],
			data_row,
			col_idx))
}
