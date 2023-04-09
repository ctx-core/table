import { header_M_col_idx_sym } from '../data_row_/index.js'
import { json_val__dehydrate } from '../json_val__dehydrate/index.js'
/** @typedef {import('@ctx-core/types').json_T}json_T */
/** @typedef {import('../_types').data_row_T}data_row_T */
/** @typedef {import('../_types').dehydrated_json_data_row_tuple_T}dehydrated_json_data_row_tuple_T */
/** @typedef {import('../_types').dehydrated_val__T}dehydrated_val__T */
/** @typedef {import('../_types').header_row_T}header_row_T */
/** @typedef {import('../_types').hydrated_json_val_T}hydrated_json_val_T */
/**
 * @param {data_row_T}data_row
 * @param {dehydrated_val__T}val__dehydrate
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
