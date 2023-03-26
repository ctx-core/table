import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { data_row_a__new, header_row__new, table__hydrate, unhydrated_table_T } from '../index.js'
test('table__hydrate', ()=>{
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	const unhydrated_table = {
		header_row,
		data_row_a: [
			['foo', 'bar', 'baz', 1.23],
			['zzz', 'yyy', 'xxx', 3.14],
		]
	}
	const table = table__hydrate<[
		['col0', string],
		['col1', string],
		['col2', string],
		['col3', number],
	]>(unhydrated_table as unhydrated_table_T<[
		['col0', string],
		['col1', string],
		['col2', string],
		['col3', number],
	]>)
	equal(table, {
		header_row,
		data_row_a: data_row_a__new([
			['foo', 'bar', 'baz', 1.23],
			['zzz', 'yyy', 'xxx', 3.14],
		], header_row)
	})
	equal(table.data_row_a[0].col0, 'foo')
	equal(table.data_row_a[0].col1, 'bar')
	equal(table.data_row_a[0].col2, 'baz')
	equal(table.data_row_a[0].col3, 1.23)
	equal(table.data_row_a[1].col0, 'zzz')
	equal(table.data_row_a[1].col1, 'yyy')
	equal(table.data_row_a[1].col2, 'xxx')
	equal(table.data_row_a[1].col3, 3.14)
})
test.run()
