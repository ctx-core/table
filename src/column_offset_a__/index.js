import { reduce } from '@ctx-core/array'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { column_a__ } from '../column_a__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').column_offsets_T}column_offsets_T */
/** @type {typeof import('./index.d.ts').column_offset_a__} */
export const column_offset_a__ = be_('column_offset_a__', ctx=>
	computed_(column_a__(ctx),
		columns=>
			column_offset_a__new(columns)))
export { column_offset_a__ as column_offsets$_ }
/**
 * @param {Ctx}ctx
 * @returns {column_offsets_T}
 * @private
 */
export function column_offset_a_(ctx) {
  return column_offset_a__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {column_offsets_T}column_offset_a
 */
export function column_offsets__set(ctx, column_offset_a) {
  column_offset_a__(ctx).$ = column_offset_a
}
/**
 * @param {string[]}column_a
 * @returns {import('../_types').column_offsets_T}
 */
export function column_offset_a__new(column_a) {
	return reduce(column_a, (memo, column, i)=>{
		memo[column] = i
		return memo
	}, {})
}
export {
	column_offset_a__new as column_offsets_,
	column_offset_a__new as _column_offsets,
	column_offset_a__new as _offsets__column,
}
