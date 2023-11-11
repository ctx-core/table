import { header_M_col_idx_sym } from '../data_row/index.js'
import { data_row__dehydrate } from '../data_row__dehydrate/index.js'
import { json_val__dehydrate } from '../json_val__dehydrate/index.js'
/** @typedef {import('@ctx-core/types/index').json_T}json_T */
/** @typedef {import('../_types/index.d.ts').data_row_T}data_row_T */
/** @typedef {import('../_types/index.d.ts').val__dehydrate_T}val__dehydrate_T */
/** @typedef {import('../_types/index.d.ts').header_row_T}header_row_T */
/** @typedef {import('../_types/index.d.ts').hydrated_json_val_T}hydrated_json_val_T */
/**
 * @param {data_row_T}data_row
 * @param {val__dehydrate_T}dehydrated_val_
 * @returns {json_T}
 * @private
 */
export function data_row__json__new(
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
export { data_row__json__new as data_row__json_ }