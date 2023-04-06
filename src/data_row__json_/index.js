import { header_M_col_idx_sym } from '../data_row_/index.js'
/** @typedef {import('@ctx-core/types').json_T}json_T */
/** @typedef {import('../_types').data_row_T}data_row_T */
/** @typedef {import('../_types').dehydrated_json_val__T}dehydrated_json_val__T */
/** @typedef {import('../_types').header_row_T}header_row_T */
/** @typedef {import('../_types').hydrated_json_val_T}hydrated_json_val_T */
/**
 * @param {data_row_T}data_row
 * @param {dehydrated_json_val__T}dehydrated_json_val_
 * @returns {json_T}
 * @private
 */
export function data_row__json_(
	data_row,
	dehydrated_json_val_ = $=>$
) {
	/** @type {header_row_T} */
	const header_row = data_row[header_M_col_idx_sym].header_row
	return /** @type {json_T} */JSON.stringify(
		data_row.map((hydrated_json_val, idx)=>
			dehydrated_json_val_(
				hydrated_json_val,
				header_row[idx],
				data_row,
				idx)))
}
