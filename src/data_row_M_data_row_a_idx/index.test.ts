import { ctx_ } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import {
	data_row_,
	data_row_a__new,
	data_row_a__set,
	data_row_M_data_row_a_idx_,
	data_row_M_data_row_a_idx__,
	data_row_M_data_row_a_idx__new, data_row_M_data_row_a_idx__set,
	type data_row_T,
	header_M_row_idx_,
	header_row__new,
	table_,
	table__set
} from '../index.js'
test('data_row_M_data_row_a_idx__', ()=>{
	const ctx = ctx_()
	equal(table_(ctx), undefined)
	equal(data_row_M_data_row_a_idx__(ctx).$, undefined)
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	const header_M_row_idx = header_M_row_idx_(header_row)
	const data_row_a = data_row_a__new([
		data_row_(['foo', 'bar', 'baz', 1.23], header_M_row_idx),
		data_row_(['zzz', 'yyy', 'xxx', 3.14], header_M_row_idx),
	], header_M_row_idx)
	data_row_a__set(ctx, data_row_a)
	const table = {
		header_row,
		data_row_a
	}
	table__set(ctx, table)
	equal(table_(ctx), table)
	equal(data_row_M_data_row_a_idx__(ctx).$, new Map<data_row_T, number>([
		[data_row_a[0], 0],
		[data_row_a[1], 1],
	]))
})
test('data_row_M_data_row_a_idx_|Ctx argument', ()=>{
	const ctx = ctx_()
	equal(table_(ctx), undefined)
	equal(data_row_M_data_row_a_idx_(ctx), undefined)
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	const header_M_row_idx = header_M_row_idx_(header_row)
	const data_row_a = data_row_a__new([
		data_row_(['foo', 'bar', 'baz', 1.23], header_M_row_idx),
		data_row_(['zzz', 'yyy', 'xxx', 3.14], header_M_row_idx),
	], header_M_row_idx)
	data_row_a__set(ctx, data_row_a)
	const table = {
		header_row,
		data_row_a
	}
	table__set(ctx, table)
	equal(table_(ctx), table)
	equal(data_row_M_data_row_a_idx_(ctx), new Map<data_row_T, number>([
		[data_row_a[0], 0],
		[data_row_a[1], 1],
	]))
})
test('data_row_M_data_row_a_idx__new', ()=>{
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	const header_M_row_idx = header_M_row_idx_(header_row)
	const data_row_a = data_row_a__new([
		data_row_(['foo', 'bar', 'baz', 1.23], header_M_row_idx),
		data_row_(['zzz', 'yyy', 'xxx', 3.14], header_M_row_idx),
	], header_M_row_idx)
	equal(data_row_M_data_row_a_idx__new(data_row_a), new Map<data_row_T, number>([
		[data_row_a[0], 0],
		[data_row_a[1], 1],
	]))
})
test('data_row_M_data_row_a_idx_|data_row_T[] argument', ()=>{
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	const header_M_row_idx = header_M_row_idx_(header_row)
	const data_row_a = data_row_a__new([
		data_row_(['foo', 'bar', 'baz', 1.23], header_M_row_idx),
		data_row_(['zzz', 'yyy', 'xxx', 3.14], header_M_row_idx),
	], header_M_row_idx)
	equal(data_row_M_data_row_a_idx_(data_row_a), new Map<data_row_T, number>([
		[data_row_a[0], 0],
		[data_row_a[1], 1],
	]))
})
test('data_row_M_data_row_a_idx__set', ()=>{
	const ctx = ctx_()
	equal(table_(ctx), undefined)
	equal(data_row_M_data_row_a_idx_(ctx), undefined)
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	const header_M_row_idx = header_M_row_idx_(header_row)
	const data_row_a = data_row_a__new([
		data_row_(['foo', 'bar', 'baz', 1.23], header_M_row_idx),
		data_row_(['zzz', 'yyy', 'xxx', 3.14], header_M_row_idx),
	], header_M_row_idx)
	const data_row_M_data_row_a_idx = data_row_M_data_row_a_idx__new(data_row_a)
	data_row_M_data_row_a_idx__set(ctx, data_row_M_data_row_a_idx)
	equal(table_(ctx), {
		header_row,
		data_row_a,
	})
	equal(data_row_M_data_row_a_idx_(ctx), data_row_M_data_row_a_idx)
})
test.run()
