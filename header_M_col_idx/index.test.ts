import { ctx__new } from 'ctx-core/be'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import {
	header_M_col_idx_,
	header_M_col_idx$_,
	header_M_col_idx__new,
	header_M_col_idx__set,
	header_row__new,
	header_row__set,
	table_,
	table__set
} from '../index.js'
test('header_M_col_idx$_', ()=>{
	const ctx = ctx__new()
	const header_M_col_idx_ = header_M_col_idx$_(ctx)
	equal(header_M_col_idx_(), undefined)
	header_row__set(ctx, ['col0', 'col1', 'col2', 'col3'])
	equal(header_M_col_idx_(), new Map<string, number>([
		['col0', 0],
		['col1', 1],
		['col2', 2],
		['col3', 3]
	]))
})
test('header_M_col_idx_|Ctx argument', ()=>{
	const ctx = ctx__new()
	equal(header_M_col_idx_(ctx), undefined)
	header_row__set(ctx, ['col0', 'col1', 'col2', 'col3'])
	equal(header_M_col_idx_(ctx), new Map<string, number>([
		['col0', 0],
		['col1', 1],
		['col2', 2],
		['col3', 3]
	]))
})
test('header_M_col_idx__new', ()=>{
	const header_row =
		header_row__new(['col0', 'col1', 'col2', 'col3'])
	const header_M_col_idx =
		header_M_col_idx__new(header_row)
	equal(
		header_M_col_idx,
		new Map<string, number>([
			['col0', 0],
			['col1', 1],
			['col2', 2],
			['col3', 3]
		]))
	equal(header_M_col_idx.header_row, header_row)
})
test('header_M_col_idx_|column_a_T argument', ()=>{
	const ctx = ctx__new()
	equal(header_M_col_idx_(ctx), undefined)
	table__set(ctx, {
		header_row: ['col0', 'col1', 'col2', 'col3'],
		data_row_a: []
	})
	equal(header_M_col_idx_(ctx), new Map<string, number>([
		['col0', 0],
		['col1', 1],
		['col2', 2],
		['col3', 3]
	]))
})
test('header_M_col_idx__set', ()=>{
	const ctx = ctx__new()
	equal(table_(ctx), undefined)
	header_M_col_idx__set(ctx,
		header_M_col_idx__new(['col0', 'col1', 'col2', 'col3']))
	equal(table_(ctx), {
		header_row: ['col0', 'col1', 'col2', 'col3'],
		data_row_a: []
	})
	header_M_col_idx__set(ctx,
		header_M_col_idx__new(['col0', 'col1', 'col2', 'col3', 'col4']))
	equal(table_(ctx), {
		header_row: ['col0', 'col1', 'col2', 'col3', 'col4'],
		data_row_a: []
	})
})
test.run()
