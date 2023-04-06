import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { data_row__hydrate, dehydrated_json_data_row_tuple_T, header_row__new } from '../index.js'
test('data_row__hydrate|-val__hydrate', ()=>{
	const header_row =
		header_row__new<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
			['col4', Date],
		]>([
			'col0',
			'col1',
			'col2',
			'col3',
			'col4',
		])
	const dehydrated_data_row_tuple =
		['foo', 'bar', 'baz', 1.23, '2020-5-5'] as dehydrated_json_data_row_tuple_T<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
			['col4', Date],
		]>
	const data_row =
		data_row__hydrate<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
			['col4', Date],
		]>(
			dehydrated_data_row_tuple,
			header_row)
	equal(
		data_row,
		['foo', 'bar', 'baz', 1.23, new Date('2020-5-5')])
	equal(data_row.col0, 'foo')
	equal(data_row.col1, 'bar')
	equal(data_row.col2, 'baz')
	equal(data_row.col3, 1.23)
	equal(data_row.col4, new Date('2020-5-5'))
})
test('data_row__hydrate|+val__hydrate', ()=>{
	const header_row =
		header_row__new<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
			['col4', Date],
		]>([
			'col0',
			'col1',
			'col2',
			'col3',
			'col4',
		])
	const dehydrated_data_row_tuple =
		['foo', 'bar', 'baz', 1.23, '2020-05-05'] as dehydrated_json_data_row_tuple_T<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
			['col4', Date],
		]>
	const data_row =
		data_row__hydrate<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
			['col4', Date],
		]>(
			dehydrated_data_row_tuple,
			header_row,
			(
				val,
				header,
			)=>
				header === 'col4'
				? new Date(`${val}:00:00:00Z`)
				: val)
	equal(
		data_row,
		['foo', 'bar', 'baz', 1.23, new Date('2020-05-05:00:00:00Z')])
	equal(data_row.col0, 'foo')
	equal(data_row.col1, 'bar')
	equal(data_row.col2, 'baz')
	equal(data_row.col3, 1.23)
	equal(data_row.col4, new Date('2020-05-05:00:00:00Z'))
})
test.run()
