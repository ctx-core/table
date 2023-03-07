/**
 * @param {unknown[]}datum_a
 * @param {column_M_row_idx_T}[column_M_row_idx]
 * @returns {data_row_T<unknown>}
 * @private
 */
export function data_row_(
	datum_a,
	column_M_row_idx
) {
	return new Proxy(datum_a, {
		get(target, name) {
			const column_idx = column_M_row_idx.get(name)
			if (column_idx != null) {
				return datum_a[column_idx]
			} else {
				return datum_a[name]
			}
		},
		set(target, prop, val) {
			const column_idx = column_M_row_idx.get(name)
			if (column_idx != null) {
				datum_a[column_idx] = val
			} else {
				datum_a[name] = val
			}
		}
	})
}
export {
	data_row_ as _row_proxy,
	data_row_ as _proxy__row,
}
