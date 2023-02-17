import { maybe_key_r_ } from '@ctx-core/array'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { data_rows_filter__ } from '../data_rows_filter__/index.js'
/** @typedef {import('./index.d.ts').data_rows_filter_table__T}data_rows_filter_table__T */
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {data_rows_filter_table__T}
 */
export function data_rows_filter_table__(ctx) {
	return _data_rows_filter_table__(ctx)
}
/** @type {import('@ctx-core/object').Be<data_rows_filter_table__T>} */
const _data_rows_filter_table__ = be_(
	'data_rows_filter_table__',
	ctx=>
		computed_(
			data_rows_filter__(ctx),
			data_rows_filter=>
				data_rows_filter
				? maybe_key_r_(
					/** @type {any} */data_rows_filter, 'row_id')
				: null))
export { data_rows_filter_table__ as data_rows_filter_table$_ }
