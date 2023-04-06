import { data_row_a__new } from '../data_row_a/index.js'
/** @typedef {import('../_types').table_T}table_T */
/** @typedef {import('../_types').unhydrated_table_T}unhydrated_table_T */
/**
 * @param {unhydrated_table_T}unhydrated_table
 * @returns {table_T}
 */
export function table__hydrate(
	unhydrated_table
) {
	const { header_row } = unhydrated_table
	return {
		header_row,
		data_row_a: data_row_a__new(
			unhydrated_table.data_row_a
				.map(unhydrated_row=>
					unhydrated_row.map(unhydrated_val=>
						hydrate__val_(unhydrated_val))),
			header_row)
	}
}
/**
 * @param {unknown}unhydrated_val
 * @returns {unknown}
 * @See https://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm
 * @private
 */
export function hydrate__val_(unhydrated_val) {
	switch (true) {
		case typeof unhydrated_val === 'string':
			const millis = Date.parse(unhydrated_val)
			if (!isNaN(millis)) {
				return new Date(millis)
			}
		default:
			return unhydrated_val
	}
}
