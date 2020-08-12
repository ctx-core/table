import { writable, derived, get, Readable } from 'svelte/store'
import {
	derived__spread, _clear__store, subscribe,
} from '@ctx-core/store'
import { _b } from '@ctx-core/object'
import { _andand, falsy } from '@ctx-core/function'
import { I } from '@ctx-core/combinators'
import { _hash__key, _fn__hash__key } from '@ctx-core/array'
import {
	_proxy__row, _offsets__column, _rows, _rows__data
} from './lib'
import { has__dom } from '@ctx-core/dom'
export const b__table = _b('__table', ()=>
	writable([]))
export const __table = b__table()
export const b__columns = _b('__columns', ctx=>
	derived(
		b__table(ctx),
		_andand(0)))
export const __columns = b__columns()
export const b__columns__data = _b('__columns__data', ctx=>
	derived(
		b__columns(ctx),
		I))
export const __columns__data = b__columns__data()
export const b__offsets__column = _b('__offsets__column', ctx=>
	derived(
		b__columns(ctx),
		_offsets__column))
export const __offsets__column = b__offsets__column()
export const b__domain__table = _b('__domain__table', ()=>
	writable([0, 10.0]))
export const __domain__table = b__domain__table()
export const b__domain__ticks = _b('__domain__ticks', ()=>
	writable([0, 5.0, 10.0]))
export const __domain__ticks = b__domain__ticks()
export const b__rows = _b('__rows', ctx=>
	derived__spread([
		b__table(ctx),
		b__offsets__column(ctx)
	], _rows))
export const __rows = b__rows()
export const b__rows__data = _b('__rows__data', ctx=>
	derived__spread([
			b__rows(ctx),
			b__columns__data(ctx),
			b__offsets__column(ctx),
		],
		_rows__data
	) as Readable<falsy|any[]>
)
export const __rows__data = b__rows__data()
export const b__reverse__columns = _b('__reverse__columns', ctx=>
	derived(
		b__columns(ctx),
		columns=>
			columns
			&& columns.slice(0).reverse()))
export const __reverse__columns = b__reverse__columns()
export const b__rank__table = _b('derived__spread', ctx=>
	derived__spread([
		b__columns(ctx),
		b__rows(ctx),
		b__offsets__column(ctx),
	], _rank__table))
export const __rank__table = b__rank__table()
function _rank__table(columns, rows, offsets__column) {
	if (!columns || !rows) return
	let rank__table = []
	rank__table.push(columns)
	for (let i = 0; i < rows.length; i++) {
		rank__table.push(rows.slice(0))
	}
	let rows__rank = rank__table.slice(1)
	for (let i = 0; i < columns.length; i++) {
		const rows__sorted =
			rows__rank.slice(0).sort(
				(a, b)=>
					a[i] > b[i]
					? -1
					: a[i] < b[i]
						? 1
						: 0)
		let rank = 0
		let current_value
		for (let j = 0; j < rows__sorted.length; j++) {
			const row = rows__sorted[j]
			const value = row[i]
			if (current_value !== value) {
				current_value = value
				rank++
				row[i] = rank
			}
		}
	}
	for (let i = 1; i < rank__table.length; i++) {
		rank__table[i] = _proxy__row({
			row__data: rank__table[i],
			offsets__column
		})
	}
	return rank__table
}
export const b__row_id = _b('__row_id', ()=>
	writable(null))
export const __row_id = b__row_id()
export const b__inputs__filter__rows__data = _b('__inputs__filter__rows__data', ctx=>{
	const __inputs__filter__rows__data = writable(null)
	if (has__dom) {
		subscribe(
			b__table(ctx),
			_clear__store(__inputs__filter__rows__data))
	}
	return __inputs__filter__rows__data
})
export const __inputs__filter__rows__data = b__inputs__filter__rows__data()
export const b__filter__rows__data = _b('__filter__rows__data', ctx=>
	derived<[
		Readable<falsy|any>,
		Readable<falsy|any[]>
	], falsy|any[]>([
			b__inputs__filter__rows__data(ctx),
			b__rows__data(ctx)
		],
		([inputs__filter__rows__data, rows__data])=>{
			if (!inputs__filter__rows__data || !rows__data) return
			const filter__rows = []
			for (let i = 0; i < rows__data.length; i++) {
				const row = rows__data[i]
				let every
				for (let j = inputs__filter__rows__data.length; j--;) {
					const input__rows__data = inputs__filter__rows__data[j]
					const { column } = input__rows__data
					const value =
						row[column]
						|| 0
					if (input__rows__data.value > value) break
					if (!j) {
						every = true
					}
				}
				if (every) {
					filter__rows.push(row)
				}
			}
			return filter__rows
		})
)
export const __filter__rows__data = b__filter__rows__data()
export const b__table__filter__rows__data = _b('__table__filter__rows__data', ctx=>
	derived(
		b__filter__rows__data(ctx),
		_fn__hash__key('row_id')))
export const __table__filter__rows__data = b__table__filter__rows__data()
export const b__highlight__rows__data = _b('__highlight__rows__data', ()=>
	writable(null))
export const b__table__highlight__rows__data = _b('__table__highlight__rows__data', ()=>
	writable(null))
export const b__assign__highlight__rows = _b('assign__highlight__rows', ctx=>{
	if (has__dom) {
		subscribe(b__row_id(ctx), assign__highlight__rows)
		subscribe(b__table(ctx), assign__highlight__rows)
		subscribe(b__filter__rows__data(ctx), assign__highlight__rows)
	}
	return assign__highlight__rows
	function assign__highlight__rows() {
		const row_id = get(b__row_id(ctx))
		const rows__data = get(b__rows__data(ctx))
		const filter__rows__data = get(b__filter__rows__data(ctx))
		const rows__data__ = filter__rows__data || rows__data
		let highlight__rows__data
		if (rows__data__) {
			highlight__rows__data = []
			for (let i = 0; i < rows__data__.length; i++) {
				const row = rows__data__[i]
				if (row.row_id === row_id) {
					highlight__rows__data.push(row)
				}
			}
		}
		const table__highlight__rows__data =
			highlight__rows__data
			&& _hash__key(highlight__rows__data, 'row_id')
		b__highlight__rows__data(ctx)
			.set(highlight__rows__data)
		b__table__highlight__rows__data(ctx)
			.set(table__highlight__rows__data)
	}
})
export const assign__highlight__rows = b__assign__highlight__rows()
export const b__row = _b('__row', ()=>
	writable(null))
export const __row = b__row()
export const b__set__row = _b('set__row', ctx=>{
	if (has__dom) {
		subscribe(b__row_id(ctx), set__row)
		subscribe(b__table(ctx), set__row)
		set__row()
	}
	return set__row
	function set__row() {
		const rows = get(b__rows(ctx))
		const row_id = get(b__row_id(ctx))
		if (!rows || !row_id) return
		let row
		for (let i = 0; i < rows.length; i++) {
			const row__ = rows[i]
			if (row__.row_id === row_id) {
				row = row__
				break
			}
		}
		__row.set(row)
	}
})
export const set__row = b__set__row()
