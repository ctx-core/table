import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('./index.d.ts').data} */
/** @type {typeof import('./index.d.ts').data_highlight_row_a__} */
export const data_highlight_row_a__ = be_('data_highlight_row_a__', ()=>
	atom_(undefined))
export {
	data_highlight_row_a__ as data_highlight_rows__,
	data_highlight_row_a__ as data_highlight_rows$_,
}
/**
 * @param {Ctx}ctx
 * @returns {unknown[][]}
 * @private
 */
export function data_highlight_row_a_(ctx) {
	return data_highlight_row_a__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {unknown[][]}data_highlight_row_a
 */
export function data_highlight_row_a__set(ctx, data_highlight_row_a) {
	data_highlight_row_a__(ctx).$ = data_highlight_row_a
}
