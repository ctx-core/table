import { data_row_ } from '../data_row_/index.js'
import { header_M_col_idx_ } from '../header_M_col_idx/index.js'
/** @typedef {import('../_types').header_M_col_idx_T}header_M_col_idx_T */
/** @typedef {import('../_types').data_row_T}data_row_T */
/** @typedef {import('../_types').dehydrated_json_data_row_tuple_T}dehydrated_json_data_row_tuple_T */
/** @typedef {import('../_types').header_row_T}header_row_T */
/** @typedef {import('../_types').hydrated_val__T}hydrated_val__T */
/**
 * @param {dehydrated_json_data_row_tuple_T}dehydrated_data_row_tuple
 * @param {header_row_T|header_M_col_idx_T}header_row_or_header_M_col_idx
 * @param {hydrated_val__T}[val__hydrate]
 * @returns {data_row_T<unknown>}
 */
export function data_row__hydrate(
	dehydrated_data_row_tuple,
	header_row_or_header_M_col_idx,
	val__hydrate = $=>$
) {
	const header_M_col_idx =
		typeof header_row_or_header_M_col_idx.get === 'function'
		? /** @type {header_M_col_idx_T} */header_row_or_header_M_col_idx
		: header_M_col_idx_(header_row_or_header_M_col_idx)
	const { header_row } = header_M_col_idx
	return data_row_(
		dehydrated_data_row_tuple.map(
			(dehydrated_val, col_idx)=>
				val__hydrate(
					dehydrated_val,
					header_row[col_idx],
					dehydrated_data_row_tuple,
					col_idx)),
		header_row_or_header_M_col_idx)
}
