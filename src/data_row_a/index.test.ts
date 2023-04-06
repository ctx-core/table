import { ctx_ } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import {
	data_row_,
	data_row_a_,
	data_row_a__,
	data_row_a__new,
	data_row_a__set,
	header_M_col_idx_,
	header_row__new,
	table_,
	table__set
} from '../index.js'
test('data_row_a__', ()=>{
	const ctx = ctx_()
	equal(data_row_a__(ctx).$, undefined)
	equal(table_(ctx), undefined)
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	const header_M_col_idx = header_M_col_idx_(header_row)
	table__set(ctx, {
		header_row,
		data_row_a: [
			data_row_(['foo', 'bar', 'baz', 1.23], header_M_col_idx),
			data_row_(['zzz', 'yyy', 'xxx', 3.14], header_M_col_idx),
		]
	})
	equal(data_row_a__(ctx).$, [
		['foo', 'bar', 'baz', 1.23],
		['zzz', 'yyy', 'xxx', 3.14]
	])
})
test('data_row_a_|Ctx argument', ()=>{
	const ctx = ctx_()
	equal(data_row_a__(ctx).$, undefined)
	equal(table_(ctx), undefined)
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	const header_M_col_idx = header_M_col_idx_(header_row)
	table__set(ctx, {
		header_row,
		data_row_a: [
			data_row_(['foo', 'bar', 'baz', 1.23], header_M_col_idx),
			data_row_(['zzz', 'yyy', 'xxx', 3.14], header_M_col_idx),
		]
	})
	equal(data_row_a_(ctx), [
		['foo', 'bar', 'baz', 1.23],
		['zzz', 'yyy', 'xxx', 3.14]
	])
})
test('data_row_a__new', ()=>{
	const header_row =
		header_row__new<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
		]>(['col0', 'col1', 'col2', 'col3'])
	const header_M_col_idx =
		header_M_col_idx_<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
		]>(header_row)
	const data_row_a = data_row_a__new<[
		['col0', string],
		['col1', string],
		['col2', string],
		['col3', number],
	]>([
		['foo', 'bar', 'baz', 1.23],
		['zzz', 'yyy', 'xxx', 3.14]
	], header_M_col_idx)
	equal(data_row_a, [
		['foo', 'bar', 'baz', 1.23],
		['zzz', 'yyy', 'xxx', 3.14]
	])
	equal(data_row_a[0].col0, 'foo')
	equal(data_row_a[0].col1, 'bar')
	equal(data_row_a[0].col2, 'baz')
	equal(data_row_a[0].col3, 1.23)
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(data_row_a[1].col3, 3.14)
})
test('data_row_a_|data_row_tuple_T[] argument', ()=>{
	const header_row = header_row__new<[
		['col0', string],
		['col1', string],
		['col2', string],
		['col3', number],
	]>(['col0', 'col1', 'col2', 'col3'])
	const data_row_a = data_row_a_<[
		['col0', string],
		['col1', string],
		['col2', string],
		['col3', number],
	]>([
		['foo', 'bar', 'baz', 1.23],
		['zzz', 'yyy', 'xxx', 3.14]
	], header_row)
	equal(data_row_a, [
		['foo', 'bar', 'baz', 1.23],
		['zzz', 'yyy', 'xxx', 3.14]
	])
	equal(data_row_a[0].col0, 'foo')
	equal(data_row_a[0].col1, 'bar')
	equal(data_row_a[0].col2, 'baz')
	equal(data_row_a[0].col3, 1.23)
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(data_row_a[1].col3, 3.14)
})
test('data_row_a__set', ()=>{
	const ctx = ctx_()
	equal(data_row_a_(ctx), undefined)
	equal(table_(ctx), undefined)
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	const header_M_col_idx = header_M_col_idx_(header_row)
	const data_row_a = data_row_a__new([
		data_row_(['foo', 'bar', 'baz', 1.23], header_M_col_idx),
		data_row_(['zzz', 'yyy', 'xxx', 3.14], header_M_col_idx),
	], header_M_col_idx)
	data_row_a__set(ctx, data_row_a)
	equal(data_row_a_(ctx), [
		['foo', 'bar', 'baz', 1.23],
		['zzz', 'yyy', 'xxx', 3.14]
	])
	equal(table_(ctx), {
		header_row,
		data_row_a: [
			['foo', 'bar', 'baz', 1.23],
			['zzz', 'yyy', 'xxx', 3.14]
		]
	})
})
test.run()
