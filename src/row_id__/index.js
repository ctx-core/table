import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').row_id__} */
export const row_id__ = be_('row_id__', ctx=>
	atom_(undefined))
export { row_id__ as row_id$_ }
/**
 * @param {Ctx}ctx
 * @returns {string}
 * @private
 */
export function row_id_(ctx) {
  return row_id__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {string}row_id
 */
export function row_id__set(ctx, row_id) {
	row_id__(ctx).$ = row_id
}
