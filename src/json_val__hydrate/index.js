/** @typedef {import('../_types').data_row_tuple_T}data_row_tuple_T */
/** @typedef {import('../_types').dehydrated_json_val_T}dehydrated_json_val_T */
/** @typedef {import('../_types').hydrated_json_val_T}hydrated_json_val_T */
/**
 * @param {dehydrated_json_val_T}dehydrated_json_val
 * @param {string}[_header]
 * @param {data_row_tuple_T}[_data_row]
 * @param {number}[_idx]
 * @returns {hydrated_json_val_T}
 * @private
 */
export function json_val__hydrate(
	dehydrated_json_val,
	_header,
	_data_row,
	_col_idx
) {
	if (typeof dehydrated_json_val === 'string') {
		const millis = Date.parse(dehydrated_json_val)
		if (!isNaN(millis)) {
			return new Date(millis)
		}
	}
	return dehydrated_json_val
}
