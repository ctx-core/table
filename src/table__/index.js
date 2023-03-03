import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('./index.d.ts').table_T}table_T */
/** @type {typeof import('./index.d.ts').table__} */
export const table__ = be_('table__', ctx=>
	atom_([]))
export { table__ as table$_ }
/**
 * @param {Ctx}ctx
 * @returns {table_T<unknown>}
 * @private
 */
export function table_(ctx) {
  return table__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {table_T<unknown>}table
 */
export function table__set(ctx, table) {
  table__(ctx).$ = table
}
