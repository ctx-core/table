const datum_a_M_column_M_row_idx__sym = Symbol.for('datum_a_M_column_M_row_idx')
if (!globalThis[datum_a_M_column_M_row_idx__sym]) {
	globalThis[datum_a_M_column_M_row_idx__sym] = new WeakMap()
}
const datum_a_M_column_M_row_idx = globalThis[datum_a_M_column_M_row_idx__sym]
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
	datum_a_M_column_M_row_idx.set(datum_a, column_M_row_idx)
	return new Proxy(datum_a, { get, set })
}
export {
	data_row_ as _row_proxy,
	data_row_ as _proxy__row,
}
function get(target, name) {
	const column_idx = datum_a_M_column_M_row_idx.get(target).get(name)
	if (column_idx != null) {
		return target[column_idx]
	} else {
		return target[name]
	}
}
function set(target, prop, val) {
	const column_idx = datum_a_M_column_M_row_idx.get(target).get(name)
	if (column_idx != null) {
		target[column_idx] = val
	} else {
		target[name] = val
	}
}
