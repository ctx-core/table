/// <reference types="../_types/index.d.ts" />
import { globalThis__prop__ensure } from 'ctx-core/object'
import { header_M_col_idx_ } from '../header_M_col_idx/index.js'
export const length_sym = Symbol.for('length')
export const header_M_col_idx_sym = Symbol.for('header_M_col_idx')
const datum_a_MM_header_M_col_idx = globalThis__prop__ensure(
	Symbol.for('datum_a_MM_header_M_col_idx'),
	()=>new WeakMap())
/**
 * @param {data_row_tuple_T}data_row_tuple
 * @param {header_row_T|header_M_col_idx_T}header_row_OR_header_M_col_idx
 * @returns {data_row_T<unknown>}
 * @private
 */
export function data_row__new(
	data_row_tuple,
	header_row_OR_header_M_col_idx
) {
	if (!header_row_OR_header_M_col_idx) {
		throw new Error('data_row_: header_row_OR_header_M_col_idx: missing')
	}
	datum_a_MM_header_M_col_idx.set(
		data_row_tuple,
		typeof header_row_OR_header_M_col_idx.get === 'function'
			? header_row_OR_header_M_col_idx
			: header_M_col_idx_(/** @type {header_row_T} */header_row_OR_header_M_col_idx))
	return new Proxy(
		/** @type {data_row_T<unknown>} */data_row_tuple,
		/** @type {ProxyHandler} */
		{ get, set })
}
export { data_row__new as data_row_ }
/**
 * @param {data_row_T}target
 * @param {string|symbol}prop_name
 * @returns {unknown}
 */
function get(
	target,
	prop_name
) {
	if (prop_name === length_sym) return target.length
	const header_M_col_idx = datum_a_MM_header_M_col_idx.get(target)
	if (prop_name === header_M_col_idx_sym) return header_M_col_idx
	const col_idx = header_M_col_idx.get(prop_name)
	return (
		col_idx != null
			? target[col_idx]
			: target[prop_name])
}
/**
 * @param {data_row_T}target
 * @param {string}prop_name
 * @param {unknown}val
 */
function set(
	target,
	prop_name,
	val
) {
	const column_idx = datum_a_MM_header_M_col_idx.get(target).get(prop_name)
	if (column_idx != null) {
		target[column_idx] = val
	} else {
		target[prop_name] = val
	}
	return true
}
/**
 * @param {data_row_T}data_row
 * @returns {data_row_o_T}
 * @private
 */
export function data_row_o__new(data_row) {
	const header_M_col_idx = data_row[header_M_col_idx_sym]
	const data_row_o = {}
	for (const header of header_M_col_idx.keys()) {
		data_row_o[header] = data_row[header]
	}
	return data_row_o
}
export { data_row_o__new as data_row_o_ }
