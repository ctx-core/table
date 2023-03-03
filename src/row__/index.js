import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { row_a__ } from '../row_a__/index.js'
import { row_id__ } from '../row_id__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').Row}Row */
/** @type {typeof import('./index.d.ts').row__} */
export const row__ = be_('row__', ctx=>
	computed_([
		row_a__(ctx),
		row_id__(ctx),
	], (row_a, row_id)=>{
		if (!row_a || !row_id) return
		let row = null
		for (let i = 0; i < row_a.length; i++) {
			const i_row = row_a[i]
			if (i_row.row_id === row_id) {
				row = i_row
				break
			}
		}
		return row
	}))
export { row__ as row$_ }
/**
 * @param {Ctx}ctx
 * @returns {Row<unknown>}
 * @private
 */
export function row_(ctx) {
  return row__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {Row<unknown>}row
 */
export function row__set(ctx, row) {
  row__(ctx).$ = row
}
