import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { data_row_, header_M_row_idx__new, header_row__new } from '../index.js'
test('data_row_', ()=>{
	const header_row = header_row__new(['col0', 'col1', 'col2', 'col3'])
	const header_M_row_idx = header_M_row_idx__new(header_row)
	const data_row = data_row_(
		['foo', 'bar', 'baz', 1.23],
		header_M_row_idx)
	equal(data_row, ['foo', 'bar', 'baz', 1.23])
	equal(data_row.col0, 'foo')
	equal(data_row.col1, 'bar')
	equal(data_row.col2, 'baz')
	equal(data_row.col3, 1.23)
})
test.run()
