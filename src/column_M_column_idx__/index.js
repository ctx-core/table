import { nullish__check_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { column_a__ } from '../column_a__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').column_M_column_idx__} */
export const column_M_column_idx__ = be_('column_M_column_idx__', ctx=>
	computed_(column_a__(ctx), column_a=>
		nullish__check_([column_a], ()=>{
			/** @type {column_M_column_idx_T} */
			const column_M_column_idx = new Map()
			for (let column_idx = 0; column_idx < column_a.length; column_idx++) {
				const column = column_a[column_idx]
				column_M_column_idx.set(column, column_idx)
			}
			return column_M_column_idx
		})))
/**
 * @param {Ctx}ctx
 * @returns{Map<string, number>}
 * @private
 */
export function column_M_column_idx_(ctx) {
  return column_M_column_idx__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {Map<string, number>}column_M_column_idx
 */
export function column_M_column_idx__set(ctx, column_M_column_idx) {
  column_M_column_idx__(ctx).$ = column_M_column_idx
}
