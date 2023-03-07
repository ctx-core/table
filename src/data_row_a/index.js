import { nullish__check_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { table__ } from '../table/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').data_row_T}Row */
/** @type {typeof import('./index.d.ts').data_row_a__} */
export const data_row_a__ = be_('data_row_a__', ctx=>
	computed_(table__(ctx), table=>
		nullish__check_([table], ()=>
			table.data_row_a)))
export {
	data_row_a__ as row_a__,
	data_row_a__ as rows__,
	data_row_a__ as rows$_,
}
/**
 * @param {Ctx}ctx
 * @returns {Row<unknown>[]}
 * @private
 */
export function data_row_a_(ctx) {
	return data_row_a__(ctx).$
}
export {
	data_row_a_ as row_a_,
}
/**
 * @param {Ctx}ctx
 * @param {Row<unknown>[]}row_a
 */
export function data_row_a__set(ctx, row_a) {
	data_row_a__(ctx).$ = row_a
}
export {
	data_row_a__set as row_a__set,
}
