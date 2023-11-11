/** @typedef {import('../_types/index.d.ts').data_row_tuple_T}data_row_tuple_T */
/** @typedef {import('../_types/index.d.ts').dehydrated_json_val_T}dehydrated_json_val_T */
/** @typedef {import('../_types/index.d.ts').hydrated_json_val_T}hydrated_json_val_T */
/**
 * @param {hydrated_json_val_T}hydrated_json_val
 * @param {string}[_header]
 * @param {data_row_tuple_T}[_data_row]
 * @param {number}[_idx]
 * @returns {dehydrated_json_val_T}
 * @private
 */
export function json_val__dehydrate(
	hydrated_json_val,
	_header,
	_data_row,
	_col_idx
) {
	if (hydrated_json_val instanceof Date) return hydrated_json_val.toISOString()
	return /** @type {dehydrated_json_val_T} */hydrated_json_val
}
