/// <reference types="ctx-core" />
/// <reference types="../_types/index.d.ts" />
import { computed_ } from '@ctx-core/nanostores'
import { idx_a_ } from 'ctx-core/array'
import { be_, is_ctx_ } from 'ctx-core/be'
import { isArray, nullish__none_ } from 'ctx-core/function'
import { table$_, table_, table__new, table__set } from '../table/index.js'
export const header_row$_ = be_(ctx=>
	computed_(table$_(ctx), table=>
		nullish__none_([table], ()=>
			table.header_row)),
{ id: 'header_row$_' })
export { header_row$_ as header_row__ }
/**
 * @param {Ctx|column_a_T|number}ctx_or_column_a_or_length
 * @returns {column_a_T}
 * @private
 */
export function header_row_(
	ctx_or_column_a_or_length
) {
	if (is_ctx_(ctx_or_column_a_or_length)) {
		return header_row$_(/** @type {Ctx} */ctx_or_column_a_or_length).$
	}
	return header_row__new(ctx_or_column_a_or_length)
}
/**
 * @param {Ctx}ctx
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
