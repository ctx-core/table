/**
 * @param data_row{unknown[]}
 * @param column_offset_a{Record<string, number>}
 * @returns {unknown}
 */
export function row_proxy_(data_row, column_offset_a) {
	return new Proxy(data_row, {
		get
	})
	function get(target, name) {
		const key = Reflect.get(column_offset_a, name)
		if (key != null) {
			return data_row[key]
		} else {
			return target[name]
		}
	}
}
export {
	row_proxy_ as _row_proxy,
	row_proxy_ as _proxy__row,
}
