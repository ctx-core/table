import { ctx_ } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import {
	header_M_row_idx_,
	header_M_row_idx__,
	header_M_row_idx__new, header_M_row_idx__set,
	header_row__set,
	table_,
	table__set
} from '../index.js'
test('header_M_row_idx__', ()=>{
	const ctx = ctx_()
	const header_M_row_idx_ = header_M_row_idx__(ctx)
	equal(header_M_row_idx_.$, undefined)
	header_row__set(ctx, ['col0', 'col1', 'col2', 'col3'])
	equal(header_M_row_idx_.$, new Map<string, number>([
		['col0', 0],
		['col1', 1],
		['col2', 2],
		['col3', 3]
	]))
})
test('header_M_row_idx_|Ctx argument', ()=>{
	const ctx = ctx_()
	equal(header_M_row_idx_(ctx), undefined)
	header_row__set(ctx, ['col0', 'col1', 'col2', 'col3'])
	equal(header_M_row_idx_(ctx), new Map<string, number>([
		['col0', 0],
		['col1', 1],
		['col2', 2],
		['col3', 3]
	]))
})
test('header_M_row_idx__new', ()=>{
	equal(
		header_M_row_idx__new(['col0', 'col1', 'col2', 'col3']),
		new Map<string, number>([
			['col0', 0],
			['col1', 1],
			['col2', 2],
			['col3', 3]
		]))
})
test('header_M_row_idx_|column_a_T argument', ()=>{
	const ctx = ctx_()
	equal(header_M_row_idx_(ctx), undefined)
	table__set(ctx, {
		header_row: ['col0', 'col1', 'col2', 'col3'],
		data_row_a: []
	})
	equal(header_M_row_idx_(ctx), new Map<string, number>([
		['col0', 0],
		['col1', 1],
		['col2', 2],
		['col3', 3]
	]))
})
test('header_M_row_idx__set', ()=>{
	const ctx = ctx_()
	equal(table_(ctx), undefined)
	header_M_row_idx__set(ctx, new Map<string, number>([
		['col0', 0],
		['col1', 1],
		['col2', 2],
		['col3', 3]
	]))
	equal(table_(ctx), {
		header_row: ['col0', 'col1', 'col2', 'col3'],
		data_row_a: []
	})
	header_M_row_idx__set(ctx, new Map<string, number>([
		['col0', 0],
		['col1', 1],
		['col2', 2],
		['col3', 3],
		['col4', 4]
	]))
	equal(table_(ctx), {
		header_row: ['col0', 'col1', 'col2', 'col3', 'col4'],
		data_row_a: []
	})
})
test.run()
