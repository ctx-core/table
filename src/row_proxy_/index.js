/**
 * @param {import('../_types').Row<unknown>}row
 * @param {Map<string, number>}column_M_column_idx
 * @returns {unknown}
 */
export function row_proxy_(
	row,
	column_M_column_idx
) {
	return new Proxy(row, {
		get
	})
	function get(target, name) {
		const column_idx = column_M_column_idx.get(name)
		if (column_idx != null) {
			return row[column_idx]
		} else {
			return target[name]
		}
	}
}
export {
	row_proxy_ as _row_proxy,
	row_proxy_ as _proxy__row,
}
