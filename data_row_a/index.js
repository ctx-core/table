/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
/// <reference types="../_types/index.d.ts" />
import { be_, is_ctx_ } from 'ctx-core/be'
import { nullish__none_ } from 'ctx-core/function'
import { memo_ } from 'ctx-core/rmemo'
import { data_row_, header_M_col_idx_sym } from '../data_row/index.js'
import { header_M_col_idx_ } from '../header_M_col_idx/index.js'
import { header_row__new } from '../header_row/index.js'
import { table_, table__new, table__set } from '../table/index.js'
/** @type {typeof data_row_a$_} */
export const data_row_a$_ = be_(ctx=>
	memo_(()=>
		nullish__none_([table_(ctx)], table=>
			table.data_row_a)),
{ id: 'data_row_a$_' })
export { data_row_a$_ as data_row_a__ }
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
		return data_row_a$_(/** @type {Ctx} */ctx_or_data_tuple_a)()
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
		table = { ...table, data_row_a }
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
