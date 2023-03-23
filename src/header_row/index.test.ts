import { ctx_ } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { header_row_, header_row__, header_row__new, header_row__set, table_, table__set } from '../index.js'
test('header_row__', ()=>{
	const ctx = ctx_()
	table__set(ctx, {
		header_row: ['col0', 'col1', 'col2', 'col3'],
		data_row_a: [
			['foo', 'bar', 'baz', 1.23],
			['zzz', 'yyy', 'xxx', 3.14],
		]
	})
	equal(header_row__(ctx).$, ['col0', 'col1', 'col2', 'col3'])
})
test('header_row_|Ctx argument', ()=>{
	const ctx = ctx_()
	table__set(ctx, {
		header_row: ['col0', 'col1', 'col2', 'col3'],
		data_row_a: [
			['foo', 'bar', 'baz', 1.23],
			['zzz', 'yyy', 'xxx', 3.14],
		]
	})
	equal(header_row_(ctx), ['col0', 'col1', 'col2', 'col3'])
})
test('header_row__set', ()=>{
	const ctx = ctx_()
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