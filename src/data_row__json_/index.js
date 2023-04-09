import { header_M_col_idx_sym } from '../data_row_/index.js'
import { data_row__dehydrate } from '../data_row__dehydrate/index.js'
import { json_val__dehydrate } from '../json_val__dehydrate/index.js'
/** @typedef {import('@ctx-core/types').json_T}json_T */
/** @typedef {import('../_types').data_row_T}data_row_T */
/** @typedef {import('../_types').dehydrated_val__T}dehydrated_val__T */
/** @typedef {import('../_types').header_row_T}header_row_T */
/** @typedef {import('../_types').hydrated_json_val_T}hydrated_json_val_T */
/**
 * @param {data_row_T}data_row
 * @param {dehydrated_val__T}dehydrated_val_
 * @returns {json_T}
 * @private
 */
export function data_row__json_(
	data_row,
	dehydrated_val_ = json_val__dehydrate
) {
	/** @type {header_row_T} */
	const header_row = data_row[header_M_col_idx_sym].header_row
	return /** @type {json_T} */JSON.stringify(
		data_row__dehydrate(
			data_row,
			dehydrated_val_))
}