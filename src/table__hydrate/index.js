import { data_row_a__new } from '../data_row_a/index.js'
import { json_val__hydrate } from '../json_val__hydrate/index.js'
/** @typedef {import('../_types').table_T}table_T */
/** @typedef {import('../_types').dehydrated_table_T}dehydrated_table_T */
/**
 * @param {dehydrated_table_T}dehydrated_table
 * @returns {table_T}
 */
export function table__hydrate(
	dehydrated_table
) {
	const { header_row } = dehydrated_table
	return {
		header_row,
		data_row_a: data_row_a__new(
			dehydrated_table.data_row_a
				.map(dehydrated_row=>
					dehydrated_row.map(dehydrated_val=>
						json_val__hydrate(dehydrated_val))),
			header_row)
	}
}
