import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { column_a__ } from '../column_a__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').reverse_column_a__} */
export const reverse_column_a__ = be_('reverse_column_a__', ctx=>
	computed_(
		column_a__(ctx),
		column_a=>
			column_a
			? column_a.slice(0).reverse()
			: null))
export {
	reverse_column_a__ as reverse_columns__,
	reverse_column_a__ as reverse_columns$_,
}
/**
 * @param {Ctx}ctx
 * @returns {string[]}
 * @private
 */
export function reverse_column_a_(ctx) {
  return reverse_column_a__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {string[]}reverse_column_a
 */
export function reverse_column_a__set(ctx, reverse_column_a) {
  reverse_column_a__(ctx).$ = reverse_column_a
}
