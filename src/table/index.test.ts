import { ctx_ } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { header_row__new, table_, table__, table__new, table__set } from '../index.js'
test('table__', ()=>{
	const ctx = ctx_()
	equal(table__(ctx).$, undefined)
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	table__(ctx).$ = {
		header_row,
		data_row_a: []
	}
	equal(table__(ctx).$, {
		header_row,
		data_row_a: []
	})
})
test('table_|Ctx argument', ()=>{
	const ctx = ctx_()
	equal(table_(ctx), undefined)
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	table__(ctx).$ = {
		header_row,
		data_row_a: []
	}
	equal(table_(ctx), {
		header_row,
		data_row_a: []
	})
})
test('table__new', ()=>{
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	const table = table__new([], header_row)
	equal(table, {
		header_row,
		data_row_a: []
	})
})
test('table_|data_row_T[], header_row_T arguments', ()=>{
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	const table = table_([], header_row)
	equal(table, {
		header_row,
		data_row_a: []
	})
})
test('table__set', ()=>{
	const ctx = ctx_()
	equal(table_(ctx), undefined)
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	table__set(ctx, {
		header_row,
		data_row_a: []
	})
	equal(table_(ctx), {
		header_row,
		data_row_a: []
	})
})
test.run()