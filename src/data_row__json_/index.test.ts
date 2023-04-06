import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { data_row_, data_row__json_, dehydrated_json_val_T, header_row_ } from '../index.js'
test('data_row__json_|-dehydrated_json_val_', ()=>{
	const header_row = header_row_([
		'col0',
		'col1',
		'col2',
		'col3',
		'col4'
	])
	const data_row = data_row_(
		['foo', 'bar', 'baz', 1.23, new Date('2014-5-5')],
		header_row)
	equal(
		data_row__json_(data_row),
		JSON.stringify(['foo', 'bar', 'baz', 1.23, new Date('2014-5-5')]))
})
test('data_row__json_|+dehydrated_json_val_', ()=>{
	const header_row =
		header_row_<[
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
			'col4'
		])
	const data_row =
		data_row_(
			['foo', 'bar', 'baz', 1.23, new Date('2014-5-5')],
			header_row)
	equal(
		data_row__json_<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
			['col4', Date],
		]>(
			data_row,
			(
				val,
				header,
				data_row
			)=>
				header === 'col4'
				? data_row.col4.toDateString()
				: val as dehydrated_json_val_T),
		JSON.stringify([
			'foo',
			'bar',
			'baz',
			1.23,
			new Date('2014-5-5').toDateString()]))
})
test.run()
