import { idx_a_ } from '@ctx-core/array'
import { isArray, nullish__check_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_, is_ctx_ } from '@ctx-core/object'
import { table__ } from '../table/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').column_a_T}column_a_T */
/** @type {typeof import('./index.d.ts').header_row__} */
export const header_row__ = be_('header_row__', ctx=>
	computed_(table__(ctx), table=>
		nullish__check_([table], ()=>
			table.header_row)))
export {
	header_row__ as column_a__,
	header_row__ as columns__,
	header_row__ as columns$_,
}
/**
 * @param {Ctx|string[]|number[]|number}ctx_or_column_a_or_length
 * @returns {column_a_T}
 * @private
 */
export function header_row_(ctx_or_column_a_or_length) {
	if (is_ctx_(ctx_or_column_a_or_length)) return header_row__(ctx_or_column_a_or_length).$
	return header_row__new(ctx_or_column_a_or_length)
}
export {
	header_row_ as column_a_,
}
/**
 * @param {Ctx}ctx
 * @param {column_a_T}column_a
 */
export function header_row__set(ctx, column_a) {
	header_row__(ctx).$ = column_a
}
export {
	header_row__set as column_a__set,
}
/**
 * @param {string[]|number[]|number}column_a_or_length
 * @returns {string[]|number[]}
 */
export function header_row__new(column_a_or_length) {
	if (isArray(column_a_or_length)) return column_a_or_length
	return idx_a_(column_a_or_length)
}
