import { nullish__check_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { table__ } from '../table__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').Row}Row */
/** @type {typeof import('./index.d.ts').table__row_a__} */
export const table__row_a__ = be_('table__row_a__', ()=>
	computed_(table__(ctx), (
		table,
	)=>nullish__check_([table], ()=>
		table.row_a)))
/**
 * @param {Ctx}ctx
 * @returns {Row[]}
 * @private
 */
export function table__row_a_(ctx) {
	return table__row_a__(ctx).$
}
