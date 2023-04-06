/** @typedef {import('../_types').dehydrated_json_val_T}dehydrated_json_val_T */
/** @typedef {import('../_types').hydrated_json_val_T}hydrated_json_val_T */
/**
 * @param {dehydrated_json_val_T}dehydrated_json_val
 * @returns {hydrated_json_val_T}
 * @private
 */
export function json_val__hydrate(dehydrated_json_val) {
	if (typeof dehydrated_json_val === 'string') {
		const millis = Date.parse(dehydrated_json_val)
		if (!isNaN(millis)) {
			return new Date(millis)
		}
	}
	return dehydrated_json_val
}
