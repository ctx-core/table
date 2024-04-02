/// <reference types="ctx-core" />
/// <reference types="../_types/index.d.ts" />
/// <reference types="./index.d.ts" />
import { id_be_, is_ctx_ } from 'ctx-core/be'
import { sig_ } from 'ctx-core/rmemo'
/** @type {typeof table$_} */
export const table$_ = id_be_(
	'table$_',
	()=>sig_(undefined))
export { table$_ as table__ }
/**
 * @param {ctx_T|data_row_T[]}ctx_or_data_row_a
 * @param {header_row_T}[header_row]
 * @returns {table_T}
 * @private
 */
export function table_(
	ctx_or_data_row_a,
	header_row
) {
	if (is_ctx_(ctx_or_data_row_a)) return table$_(/** @type {ctx_T} */ctx_or_data_row_a)()
	return table__new(ctx_or_data_row_a, header_row)
}
/**
 * @param {ctx_T}ctx
 * @param {table_T}table
 * @private
 */
export function table__set(
	ctx,
	table
) {
	table$_(ctx).set(table)
}
/**
 * @param {data_row_T[]}data_row_a
 * @param {header_row_T}header_row
 * @returns {{header_row, data_row_a}}
 * @private
 */
export function table__new(
	data_row_a,
	header_row
) {
	return {
		data_row_a,
		header_row,
	}
}
