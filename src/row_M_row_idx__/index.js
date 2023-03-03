import { nullish__check_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { row_a__ } from '../row_a__/index.js'
import { table__row_a__ } from '../table__row_a__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').Row}Row */
/** @typedef {import('./index.d.ts').row_M_row_idx_T}row_M_row_idx_T */
/** @type {typeof import('./index.d.ts').row_M_row_idx__} */
export const row_M_row_idx__ = be_('row_M_row_idx__', ctx=>
	computed_([row_a__(ctx), table__row_a__(ctx)],
		/**
		 * @param {Row<unknown>}row_a
		 * @param {Row<unknown>[]}table__row_a
		 * @returns {Map<Row<unknown>, number>}
		 */
		(
			row_a,
			table__row_a
		)=>
			nullish__check_([row_a, table__row_a], ()=>{
				/** @type {row_M_row_idx_T} */
				const row_M_row_idx = new Map()
				for (let row_idx = 0; row_idx < row_a.length; row_idx++) {
					row_M_row_idx.set(row_a[row_idx], row_idx)
					row_M_row_idx.set(table__row_a[row_idx], row_idx)
				}
				return row_M_row_idx
			})))
/**
 * @param {Ctx}ctx
 * @returns{row_M_row_idx_T<unknown>}
 * @private
 */
export function row_M_row_idx_(ctx) {
	return row_M_row_idx__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {row_M_row_idx_T<unknown>}row_M_row_idx
 */
export function row_M_row_idx__set(ctx, row_M_row_idx) {
	row_M_row_idx__(ctx).$ = row_M_row_idx
}
