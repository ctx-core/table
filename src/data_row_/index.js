import { globalThis__prop__ensure } from '@ctx-core/object'
import { header_M_row_idx_ } from '../header_M_row_idx/index.js'
/** @typedef {import('../_types').data_row_T}data_row_T */
/** @typedef {import('../_types').data_row_tuple_T}data_row_tuple_T */
/** @typedef {import('../_types').header_M_row_idx_T}header_M_row_idx_T */
/** @typedef {import('../_types').header_row_T}header_row_T */
export const length_sym = Symbol.for('length')
export const header_M_row_idx_sym = Symbol.for('header_M_row_idx')
const datum_a_M_column_M_row_idx = globalThis__prop__ensure(
	Symbol.for('datum_a_M_column_M_row_idx'),
	()=>new WeakMap())
/** @typedef {import('../_types').data_row_tuple_T}data_row_tuple_T */
/**
 * @param {data_row_tuple_T}data_row_tuple
 * @param {header_row_T|header_M_row_idx_T}header_row_or_header_M_row_idx
 * @returns {data_row_T<unknown>}
 * @private
 */
export function data_row_(
	data_row_tuple,
	header_row_or_header_M_row_idx
) {
	if (!header_row_or_header_M_row_idx) {
		throw new Error('data_row_: header_row_or_header_M_row_idx: missing')
	}
	datum_a_M_column_M_row_idx.set(
		data_row_tuple,
		typeof header_row_or_header_M_row_idx.get === 'function'
		? header_row_or_header_M_row_idx
		: header_M_row_idx_(/** @type {header_row_T} */header_row_or_header_M_row_idx))
	return new Proxy(
		/** @type {data_row_T<unknown>} */data_row_tuple,
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
	const column_M_row_idx = datum_a_M_column_M_row_idx.get(target)
	if (prop_name === header_M_row_idx_sym) return column_M_row_idx
	const column_idx = column_M_row_idx.get(prop_name)
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
