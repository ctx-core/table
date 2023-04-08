import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { data_row_a__new, dehydrated_table_T, header_row__new, table__hydrate } from '../index.js'
test('table__hydrate|-val__hydrate', ()=>{
	const header_row = header_row__new([
		'col0',
		'col1',
		'col2',
		'col3',
		'col4',
	])
	const dehydrated_table = {
		header_row,
		data_row_a: [
			['foo', 'bar', 'baz', 1.23, '2020-5-5'],
			['zzz', 'yyy', 'xxx', 3.14, '2014-12-25'],
		]
	}
	const table = table__hydrate<[
		['col0', string],
		['col1', string],
		['col2', string],
		['col3', number],
		['col4', Date],
	]>(dehydrated_table as dehydrated_table_T<[
		['col0', string],
		['col1', string],
		['col2', string],
		['col3', number],
		['col4', Date],
	]>)
	equal(table, {
		header_row,
		data_row_a: data_row_a__new([
			['foo', 'bar', 'baz', 1.23, '2020-5-5'],
			['zzz', 'yyy', 'xxx', 3.14, '2014-12-25'],
		], header_row)
	})
	equal(table.data_row_a[0].col0, 'foo')
	equal(table.data_row_a[0].col1, 'bar')
	equal(table.data_row_a[0].col2, 'baz')
	equal(table.data_row_a[0].col3, 1.23)
	equal(table.data_row_a[0].col4, '2020-5-5')
	equal(table.data_row_a[1].col0, 'zzz')
	equal(table.data_row_a[1].col1, 'yyy')
	equal(table.data_row_a[1].col2, 'xxx')
	equal(table.data_row_a[1].col3, 3.14)
	equal(table.data_row_a[1].col4, '2014-12-25')
})
test('table__hydrate|+val__hydrate', ()=>{
	const header_row = header_row__new([
		'col0',
		'col1',
		'col2',
		'col3',
		'col4',
	])
	const dehydrated_table = {
		header_row,
		data_row_a: [
			['foo', 'bar', 'baz', 1.23, '2020-05-05'],
			['zzz', 'yyy', 'xxx', 3.14, '2014-12-25'],
		]
	}
	const table0 = table__hydrate<[
		['col0', string],
		['col1', string],
		['col2', string],
		['col3', number],
		['col4', Date],
	]>(
		dehydrated_table as dehydrated_table_T<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
			['col4', Date],
		]>,
		(
			val,
			header,
		)=>
			header === 'col4'
			? new Date(`${val}:00:00:00Z`)
			: val)
	equal(table0, {
		header_row,
		data_row_a: data_row_a__new([
			['foo', 'bar', 'baz', 1.23, new Date('2020-05-05:00:00:00Z')],
			['zzz', 'yyy', 'xxx', 3.14, new Date('2014-12-25:00:00:00Z')],
		], header_row)
	})
	equal(table0.data_row_a[0].col0, 'foo')
	equal(table0.data_row_a[0].col1, 'bar')
	equal(table0.data_row_a[0].col2, 'baz')
	equal(table0.data_row_a[0].col3, 1.23)
	equal(table0.data_row_a[0].col4, new Date('2020-05-05:00:00:00Z'))
	equal(table0.data_row_a[1].col0, 'zzz')
	equal(table0.data_row_a[1].col1, 'yyy')
	equal(table0.data_row_a[1].col2, 'xxx')
	equal(table0.data_row_a[1].col3, 3.14)
	equal(table0.data_row_a[1].col4, new Date('2014-12-25:00:00:00Z'))
	const table1 = table__hydrate<[
		['col0', string],
		['col1', string],
		['col2', string],
		['col3', number],
		['col4', Date],
	]>(
		dehydrated_table as dehydrated_table_T<[
			['col0', string],
			['col1', string],
			['col2', string],
			['col3', number],
			['col4', Date],
		]>,
		(
			val,
			header,
			dehydrated_data_row,
			col_idx
		)=>
			header === 'col4'
			? new Date(`${dehydrated_data_row[col_idx]}:00:00:00Z`)
			: val)
	equal(table1, {
		header_row,
		data_row_a: data_row_a__new([
			['foo', 'bar', 'baz', 1.23, new Date('2020-05-05:00:00:00Z')],
			['zzz', 'yyy', 'xxx', 3.14, new Date('2014-12-25:00:00:00Z')],
		], header_row)
	})
	equal(table1.data_row_a[0].col0, 'foo')
	equal(table1.data_row_a[0].col1, 'bar')
	equal(table1.data_row_a[0].col2, 'baz')
	equal(table1.data_row_a[0].col3, 1.23)
	equal(table1.data_row_a[0].col4, new Date('2020-05-05'))
	equal(table1.data_row_a[1].col0, 'zzz')
	equal(table1.data_row_a[1].col1, 'yyy')
	equal(table1.data_row_a[1].col2, 'xxx')
	equal(table1.data_row_a[1].col3, 3.14)
	equal(table1.data_row_a[1].col4, new Date('2014-12-25'))
})
test.run()
