import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { data_row_, data_row_o_, header_M_col_idx__new, header_row__new } from '../index.js'
test('data_row_', ()=>{
	const header_row =
		header_row__new<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
		]>(['col0', 'col1', 'col2', 'col3'])
	const header_M_col_idx =
		header_M_col_idx__new<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
		]>(header_row)
	const data_row = data_row_<[
		['col0', string],
		['col1', string],
		['col2', string],
		['col3', number],
	]>(
		['foo', 'bar', 'baz', 1.23],
		header_M_col_idx)
	equal(data_row, ['foo', 'bar', 'baz', 1.23])
	equal(data_row.col0, 'foo')
	equal(data_row.col1, 'bar')
	equal(data_row.col2, 'baz')
	equal(data_row.col3, 1.23)
})
test('data_row_|set', ()=>{
	const header_row =
		header_row__new<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
		]>(['col0', 'col1', 'col2', 'col3'])
	const data_a =
		['foo', 'bar', 'baz', 1.23] as [string, string, string, number]
	const data_row =
		data_row_<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
		]>(data_a, header_row)
	data_row.col1 = 'bar-custom'
	data_row.custom = 'custom_value'
	equal(data_row.col1, 'bar-custom')
	equal(data_row.custom, 'custom_value')
})
test('data_row_o_', ()=>{
	const header_row =
		header_row__new<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
		]>(['col0', 'col1', 'col2', 'col3'])
	const header_M_col_idx =
		header_M_col_idx__new<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
		]>(header_row)
	const data_row = data_row_<[
		['col0', string],
		['col1', string],
		['col2', string],
		['col3', number],
	]>(
		['foo', 'bar', 'baz', 1.23],
		header_M_col_idx)
	data_row.custom = 'custom_value'
	equal(data_row_o_(data_row), {
		col0: 'foo',
		col1: 'bar',
		col2: 'baz',
		col3: 1.23,
	})
})
test.run()
// interface o_T {
// 	col0:string
// 	col1:string
// 	col2:string
// 	col3:number
// }
