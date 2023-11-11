import { ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import {
	data_row_a__new,
	header_row$_,
	header_row_,
	header_row__new,
	header_row__set,
	table_,
	table__set
} from '../index.js'
test('header_row__', ()=>{
	const ctx = ctx__new()
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	table__set(ctx, {
		header_row,
		data_row_a: data_row_a__new([
			['foo', 'bar', 'baz', 1.23],
			['zzz', 'yyy', 'xxx', 3.14],
		], header_row)
	})
	equal(header_row$_(ctx).$, ['col0', 'col1', 'col2', 'col3'])
})
test('header_row_|Ctx argument', ()=>{
	const ctx = ctx__new()
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	table__set(ctx, {
		header_row,
		data_row_a: data_row_a__new([
			['foo', 'bar', 'baz', 1.23],
			['zzz', 'yyy', 'xxx', 3.14],
		], header_row)
	})
	equal(header_row_(ctx), ['col0', 'col1', 'col2', 'col3'])
})
test('header_row__set', ()=>{
	const ctx = ctx__new()
	equal(table_(ctx), undefined)
	equal(header_row_(ctx), undefined)
	header_row__set(ctx, ['col0', 'col1', 'col2', 'col3'])
	equal(table_(ctx), {
		header_row: ['col0', 'col1', 'col2', 'col3'],
		data_row_a: []
	})
	equal(header_row_(ctx), ['col0', 'col1', 'col2', 'col3'])
})
test('header_row__new', ()=>{
	equal(header_row__new(['col0', 'col1', 'col2', 'col3']),
		['col0', 'col1', 'col2', 'col3'])
	equal(header_row__new(4),
		[0, 1, 2, 3])
})
test('header_row_|column_a_T argument', ()=>{
	equal(header_row_(['col0', 'col1', 'col2', 'col3']),
		['col0', 'col1', 'col2', 'col3'])
	equal(header_row_(4),
		[0, 1, 2, 3])
})
test.run()
