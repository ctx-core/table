import { nullish__none_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_, clone, is_ctx_ } from '@ctx-core/object'
import { table_, table$_, table__new, table__set } from '../table/index.js'
import { data_row_, header_M_col_idx_sym } from '../data_row/index.js'
import { header_row__new } from '../header_row/index.js'
import { header_M_col_idx_ } from '../header_M_col_idx/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../_types').data_row_T}data_row_T */
/** @typedef {import('../_types').data_row_tuple_T}data_row_tuple_T */
/** @typedef {import('../_types').header_M_col_idx_T}header_M_col_idx_T */
/** @typedef {import('../_types').header_row_T}header_row_T */
/** @type {typeof import('./index.d.ts').data_row_a__} */
export const data_row_a__ = be_('data_row_a__', ctx=>
	computed_(table$_(ctx), table=>
		nullish__none_([table], ()=>
			table.data_row_a)))
/**
 * @param {Ctx|data_row_tuple_T[]}ctx_or_data_tuple_a
 * @param {header_row_T|header_M_col_idx_T}[header_row_or_header_M_col_idx]
 * @returns {data_row_T[]}
 * @private
 */
export function data_row_a_(
	ctx_or_data_tuple_a,
	header_row_or_header_M_col_idx
) {
	if (is_ctx_(ctx_or_data_tuple_a)) {
		return data_row_a__(/** @type {Ctx} */ctx_or_data_tuple_a).$
	}
	return data_row_a__new(ctx_or_data_tuple_a, header_row_or_header_M_col_idx)
}
/**
 * @param {Ctx}ctx
 * @param {data_row_T[]}data_row_a
 */
export function data_row_a__set(
	ctx,
	data_row_a
) {
	let table = table_(ctx)
	if (table) {
		table = clone(table, { data_row_a })
	} else {
		const data_row_0 = data_row_a[0]
		table = table__new(
			data_row_a,
			header_row__new(
				data_row_0
				? [...data_row_0[header_M_col_idx_sym].keys()]
				: 0))
	}
	table__set(ctx, table)
}
/**
 * @param {data_row_tuple_T[]}data_row_tuple_a
 * @param {header_row_T|header_M_col_idx_T}header_row_or_header_M_col_idx
 * @returns {data_row_T[]}
 */
export function data_row_a__new(
	data_row_tuple_a,
	header_row_or_header_M_col_idx
) {
	const header_M_col_idx =
		typeof header_row_or_header_M_col_idx.get === 'function'
		? /** @type {header_M_col_idx_T} */header_row_or_header_M_col_idx
		: header_M_col_idx_(header_row_or_header_M_col_idx)
	return /** @type {data_row_T[]} */data_row_tuple_a.map(data_row_tuple=>
		data_row_(data_row_tuple, header_M_col_idx))
}
