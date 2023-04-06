import { data_row_a__new } from '../data_row_a/index.js'
import { json_val__hydrate } from '../json_val__hydrate/index.js'
/** @typedef {import('../_types').dehydrated_table_T}dehydrated_table_T */
/** @typedef {import('../_types').hydrated_json_val__T}hydrated_json_val__T */
/** @typedef {import('../_types').table_T}table_T */
/**
 * @param {dehydrated_table_T}dehydrated_table
 * @param {hydrated_json_val__T}[val__hydrate]
 * @returns {table_T}
 */
export function table__hydrate(
	dehydrated_table,
	val__hydrate = json_val__hydrate
) {
	const { header_row } = dehydrated_table
	return {
		header_row,
		data_row_a: data_row_a__new(
			dehydrated_table.data_row_a
				.map((dehydrated_row, row_idx)=>
					dehydrated_row.map((dehydrated_val, col_idx)=>
						val__hydrate(
							dehydrated_val,
							header_row[col_idx],
							dehydrated_row,
							col_idx))),
			header_row)
	}
}
