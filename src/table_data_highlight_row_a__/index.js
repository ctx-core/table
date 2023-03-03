import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('./index.d.ts').table_data_highlight_row_a_T}table_data_highlight_row_a_T */
/** @type {typeof import('./index.d.ts').table_data_highlight_row_a__} */
export const table_data_highlight_row_a__ = be_('table_data_highlight_row_a__', ()=>
	atom_(undefined))
export { 
	table_data_highlight_row_a__ as table_data_highlight_rows__,
	table_data_highlight_row_a__ as table_data_highlight_rows$_, 
}
/**
 * @param {Ctx}ctx
 * @returns {table_data_highlight_row_a_T<unknown>}
 * @private
 */
export function table_data_highlight_row_a_(ctx) {
  return table_data_highlight_row_a__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {table_data_highlight_row_a_T<unknown>}table_data_highlight_row_a
 */
export function table_data_highlight_row_a__set(
	ctx,
	table_data_highlight_row_a
) {
  table_data_highlight_row_a__(ctx).$ = table_data_highlight_row_a
}
