import { data_row_ } from '../data_row/index.js'
import { header_M_col_idx_ } from '../header_M_col_idx/index.js'
/** @typedef {import('../_types/index.d.ts').header_M_col_idx_T} */
/** @typedef {import('../_types/index.d.ts').data_row_T} */
/** @typedef {import('../_types/index.d.ts').dehydrated_json_data_row_tuple_T} */
/** @typedef {import('../_types/index.d.ts').header_row_T} */
/** @typedef {import('../_types/index.d.ts').val__hydrate_T} */
/**
 * @param {dehydrated_json_data_row_tuple_T}dehydrated_data_row_tuple
 * @param {header_row_T|header_M_col_idx_T}header_row_or_header_M_col_idx
 * @param {val__hydrate_T}[val__hydrate]
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
