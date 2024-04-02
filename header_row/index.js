/// <reference types="ctx-core" />
/// <reference types="../_types/index.d.ts" />
import { idx_a_ } from 'ctx-core/array'
import { id_be_, is_ctx_ } from 'ctx-core/be'
import { isArray } from 'ctx-core/function'
import { memo_, nullish__none_ } from 'ctx-core/rmemo'
import { table_, table__new, table__set } from '../table/index.js'
export const header_row$_ = id_be_(
	'header_row$_',
	ctx=>
		memo_(()=>
			nullish__none_([table_(ctx)], table=>
				table.header_row)))
export { header_row$_ as header_row__ }
/**
 * @param {ctx_T|column_a_T|number}ctx_or_column_a_or_length
 * @returns {column_a_T}
 * @private
 */
export function header_row_(
	ctx_or_column_a_or_length
) {
	if (is_ctx_(ctx_or_column_a_or_length)) {
		return header_row$_(/** @type {ctx_T} */ctx_or_column_a_or_length)()
	}
	return header_row__new(ctx_or_column_a_or_length)
}
/**
 * @param {ctx_T}ctx
 * @param {column_a_T}header_row
 * @private
 */
export function header_row__set(
	ctx,
	header_row
) {
	let table = table_(ctx)
	if (table) {
		table = { ...table, header_row: header_row }
	} else {
		table = table__new([], header_row)
	}
	table__set(ctx, table)
}
/**
 * @param {string[]|number[]|number}column_a_or_length
 * @returns {string[]|number[]}
 * @private
 */
export function header_row__new(
	column_a_or_length
) {
	if (isArray(column_a_or_length)) return column_a_or_length
	return idx_a_(column_a_or_length)
}
