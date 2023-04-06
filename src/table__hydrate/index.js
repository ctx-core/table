import { data_row_a__new } from '../data_row_a/index.js'
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
						hydrate__val_(dehydrated_val))),
			header_row)
	}
}
/**
 * @param {unknown}dehydrated_val
 * @returns {unknown}
 * @See https://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm
 * @private
 */
export function hydrate__val_(dehydrated_val) {
	switch (true) {
		case typeof dehydrated_val === 'string':
			const millis = Date.parse(dehydrated_val)
			if (!isNaN(millis)) {
				return new Date(millis)
			}
		default:
			return dehydrated_val
	}
}
