import { atom_ } from '@ctx-core/nanostores'
import { be_, is_ctx_ } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').Ctx} */
/** @typedef {import('../_types/index.d.ts').data_row_T} */
/** @typedef {import('../_types/index.d.ts').header_row_T} */
/** @typedef {import('../_types/index.d.ts').table_T} */
/** @type {typeof import('./index.d.ts').table$_} */
export const table$_ = be_(()=>
	atom_(undefined),
{ id: 'table$_' })
export { table$_ as table__ }
/**
 * @param {Ctx|data_row_T[]}ctx_or_data_row_a
 * @param {header_row_T}[header_row]
 * @returns {table_T}
 * @private
 */
export function table_(
	ctx_or_data_row_a,
	header_row
) {
	if (is_ctx_(ctx_or_data_row_a)) return table$_(/** @type {Ctx} */ctx_or_data_row_a).$
	return table__new(ctx_or_data_row_a, header_row)
}
/**
 * @param {Ctx}ctx
 * @param {table_T}table
 * @private
 */
export function table__set(
	ctx,
	table
) {
	table$_(ctx).$ = table
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
