import { idx_a_ } from '@ctx-core/array'
import { isArray, nullish__none_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_, clone, is_ctx_ } from '@ctx-core/object'
import { table_, table__, table__new, table__set } from '../table/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').column_a_T}column_a_T */
/** @typedef {import('../_types').header_row_T}header_row_T */
/** @type {typeof import('./index.d.ts').header_row__} */
export const header_row__ = be_('header_row__', ctx=>
	computed_(table__(ctx), table=>
		nullish__none_([table], ()=>
			table.header_row)))
/**
 * @param {Ctx|column_a_T|number}ctx_or_column_a_or_length
 * @returns {column_a_T}
 * @private
 */
export function header_row_(
	ctx_or_column_a_or_length
) {
	if (is_ctx_(ctx_or_column_a_or_length)) {
		return header_row__(/** @type {Ctx} */ctx_or_column_a_or_length).$
	}
	return header_row__new(ctx_or_column_a_or_length)
}
/**
 * @param {Ctx}ctx
 * @param {column_a_T}header_row
 * @private
 */
export function header_row__set(
	ctx,
	header_row
) {
	let table = table_(ctx)
	if (table) {
		table = clone(table, { header_row: header_row })
	} else {
		table = table__new([], header_row)
	}
	table__set(ctx, table)
}
/**
 * @param {string[]|number[]|number}column_a_or_length
 * @returns {string[]|number[]}
 * @private
 */
export function header_row__new(
	column_a_or_length
) {
	if (isArray(column_a_or_length)) return column_a_or_length
	return idx_a_(column_a_or_length)
}
