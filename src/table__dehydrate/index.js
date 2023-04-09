import { data_row__dehydrate } from '../data_row__dehydrate/index.js'
/** @typedef {import('../_types').dehydrated_val__T}dehydrated_val__T */
/** @typedef {import('../_types').table_T}table_T */
/**
 * @param {table_T}table
 * @param {dehydrated_val__T}[val__dehydrate]
 * @returns {table_T<unknown>}
 */
export function table__dehydrate(
	table,
	val__dehydrate =
		$=>$
) {
	const { header_row } = table
	return /** @type {table_T} */{
		header_row,
		data_row_a:
			table.data_row_a
				.map(data_row=>
					data_row__dehydrate(
						data_row,
						val__dehydrate))
	}
}
