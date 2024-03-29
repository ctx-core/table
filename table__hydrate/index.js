import { data_row__hydrate } from '../data_row__hydrate/index.js'
import { header_M_col_idx_ } from '../header_M_col_idx/index.js'
/** @typedef {import('../_types/index.d.ts').dehydrated_table_T} */
/** @typedef {import('../_types/index.d.ts').val__hydrate_T} */
/** @typedef {import('../_types/index.d.ts').table_T} */
/**
 * @param {dehydrated_table_T}dehydrated_table
 * @param {val__hydrate_T}[val__hydrate]
 * @returns {table_T<unknown>}
 */
export function table__hydrate(
	dehydrated_table,
	val__hydrate = $=>$
) {
	const { header_row } = dehydrated_table
	const header_M_col_idx = header_M_col_idx_(header_row)
	return /** @type {table_T} */{
		header_row,
		data_row_a:
			dehydrated_table.data_row_a
				.map(dehydrated_data_row_tuple=>
					data_row__hydrate(
						dehydrated_data_row_tuple,
						header_M_col_idx,
						val__hydrate))
	}
}
