export const length_sym = Symbol.for('length')
const datum_a_M_column_M_row_idx__sym = Symbol.for('datum_a_M_column_M_row_idx')
if (!globalThis[datum_a_M_column_M_row_idx__sym]) {
	globalThis[datum_a_M_column_M_row_idx__sym] = new WeakMap()
}
const datum_a_M_column_M_row_idx = globalThis[datum_a_M_column_M_row_idx__sym]
/**
 * @param {unknown[]}datum_a
 * @param {column_M_row_idx_T}column_M_row_idx
 * @returns {data_row_T<unknown>}
 * @private
 */
export function data_row_(
	datum_a,
	column_M_row_idx
) {
	if (!column_M_row_idx) {
		throw new Error('data_row_: column_M_row_idx: missing')
	}
	datum_a_M_column_M_row_idx.set(datum_a, column_M_row_idx)
	return new Proxy(
		/** @type {data_row_T<unknown>} */datum_a,
		/** @type {ProxyHandler} */
		{ get, set })
}
export {
	data_row_ as _row_proxy,
	data_row_ as _proxy__row,
}
/**
 * @param {data_row_T}target
 * @param {string|symbol}prop_name
 * @returns {unknown}
 */
function get(target, prop_name) {
	if (prop_name === length_sym) {
		return target.length
	}
	const column_idx = datum_a_M_column_M_row_idx.get(target).get(prop_name)
	if (column_idx != null) {
		return target[column_idx]
	} else {
		return target[prop_name]
	}
}
/**
 * @param {data_row_T}target
 * @param {string}prop_name
 * @param {unknown}val
 */
function set(target, prop_name, val) {
	const column_idx = datum_a_M_column_M_row_idx.get(target).get(name)
	if (column_idx != null) {
		target[column_idx] = val
	} else {
		target[name] = val
	}
}
