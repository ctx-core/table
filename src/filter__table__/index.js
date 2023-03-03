import { maybe_key_r_ } from '@ctx-core/array'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { filter__data_row_a__ } from '../filter__data_row_a__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').Row}Row */
/** @typedef {import('./index.d.ts').filter__table_T}filter__table_T */
/** @type {typeof import('./index.d.ts').filter__table__} */
export const filter__table__ = be_('filter__table__', ctx=>
	computed_(
		filter__data_row_a__(ctx),
		data_rows_filter=>
			data_rows_filter
			? maybe_key_r_(
				/** @type {any} */data_rows_filter, 'row_id')
			: null))
export {
	filter__table__ as data_rows_filter_table__,
	filter__table__ as data_rows_filter_table$_,
}
/**
 * @param {Ctx}ctx
 * @returns {filter__table_T<Row>}
 * @private
 */
export function filter__table_(ctx) {
  return filter__table__(ctx).$
}
/**
 * @param {Ctx}ctx
 * @param {filter__table_T<Row>}filter__table
 */
export function filter__table__set(ctx, filter__table) {
  filter__table__(ctx).$ = filter__table
}
