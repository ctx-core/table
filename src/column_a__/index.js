import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { table__ } from '../table__/index.js'
import { nullish__check_ } from '@ctx-core/function'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').column_a__} */
export const column_a__ = be_('column_a__', ctx=>
	computed_(table__(ctx), table=>
		nullish__check_([table], ()=>
			table.column_a)))
export {
	column_a__ as columns__,
	column_a__ as columns$_,
}
/**
 * @param {Ctx}ctx
 * @returns {string[]}
 * @private
 */
export function column_a_(ctx) {
	return column_a__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {string[]}column_a
 */
export function column_a__set(ctx, column_a) {
	column_a__(ctx).$ = column_a
}