import { data_row_a__new } from '../data_row_a/index.js'
/** @typedef {import('../_types').table_T}table_T */
/** @typedef {import('../_types').unhydrated_table_T}unhydrated_table_T */
/**
 * @param {unhydrated_table_T}unhydrated_table
 * @returns {table_T}
 */
export function table__hydrate(unhydrated_table) {
	const { header_row } = unhydrated_table
	return {
		header_row,
		data_row_a: data_row_a__new(unhydrated_table.data_row_a, header_row)
	}
}
