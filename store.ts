import { writable, derived, get, Readable } from 'svelte/store'
import {
	derived__spread, _clear_store, subscribe, Writable,
} from '@ctx-core/store'
import { _b } from '@ctx-core/object'
import type { maybe, maybe_null } from '@ctx-core/function'
import { _key_hash, _maybe_key_hash } from '@ctx-core/array'
import { has__dom } from '@ctx-core/dom'
import { _column_offsets } from './_column_offsets'
import { _rows } from './_rows'
import { _data_rows } from './_data_rows'
import { _row_proxy } from './_row_proxy'
export function b__table<I extends unknown>(ctx?:object) {
	return _b<table_type<I>>('__table', ()=>
		writable<$table_type<I>>([]))(ctx)
}
export const __table = b__table()
export type $table_type<I extends unknown> = [string[]?, ...I[][]]
export type table_type<I extends unknown> = Writable<$table_type<I>>
export function b__columns(ctx?:object) {
	return (
		_b<columns_type>('__columns', ctx=>
			derived(
				b__table(ctx),
				($table:$table_type<unknown>)=>$table?.[0] as $columns_type,
			)
		)(ctx))
}
export type $columns_type = string[]
export type columns_type = Readable<$columns_type>
export const __columns = b__columns()
export const b__columns__data = _b('__columns__data', ctx=>
	derived(
		b__columns(ctx),
		(v:$columns_type)=>v))
export const __columns__data = b__columns__data()
export const b__offsets__column = _b('__offsets__column', ctx=>
	derived(
		b__columns(ctx),
		_column_offsets))
export const __offsets__column = b__offsets__column()
export type $type__domain__table = number[][]
export type type__domain__table = Writable<$type__domain__table>
export const b__domain__table = _b('__domain__table', ()=>
	writable([[0, 10.0]]))
export const __domain__table = b__domain__table()
export const b__domain__ticks = _b('__domain__ticks', ()=>
	writable([0, 5.0, 10.0]))
export const __domain__ticks = b__domain__ticks()
export function b__rows<I>(ctx?:object) {
	return _b('__rows', ctx=>
		derived__spread([
			b__table<I>(ctx),
			b__offsets__column(ctx)
		], _rows))(ctx)
}
export const __rows = b__rows()
export function b__rows__data<I>(ctx?:object) {
	return _b('__rows__data', ctx=>
		derived__spread([
				b__rows<I>(ctx),
				b__columns__data(ctx),
				b__offsets__column(ctx),
			],
			_data_rows
		) as data_rows_type<I>
	)(ctx)
}
export type $data_rows_type<I> = I[][]
export type $maybe__data_rows_type<I> = maybe<$data_rows_type<I>>
export type data_rows_type<I> = Readable<$maybe__data_rows_type<I>>
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
function _rank__table<I>(maybe_columns:maybe<$columns_type>, maybe_rows:maybe<I[][]>, offsets__column) {
	if (!maybe_columns || !maybe_rows) return
	const columns = maybe_columns as string[]
	const rows = maybe_rows as I[][]
	let table_rank = [] as $table_type<I>
	table_rank.push(columns)
	for (let i = 0; i < rows.length; i++) {
		table_rank.push(...rows.slice(0) as I[][])
	}
	const table_rows = table_rank.slice(1) as I[][]
	const rank_rows = [] as number[][]
	for (let i = 0; i < columns.length; i++) {
		const sorted_rows =
			table_rows.slice(0).sort(
				(a, b)=>
					a[i] > b[i]
					? -1
					: a[i] < b[i]
						? 1
						: 0) as I[][]
		let rank = 0
		let current_value:I|null = null
		for (let j = 0; j < sorted_rows.length; j++) {
			const sorted_row = sorted_rows[j]
			const value = sorted_row[i]
			if (!current_value || current_value !== value) {
				current_value = value
				rank++
			}
			if (!j) {
				rank_rows.push([] as number[])
			}
			const rank_row = rank_rows[j]
			rank_row[i] = rank
		}
	}
	for (let i = 0; i < rank_rows.length; i++) {
		rank_rows[i] = _row_proxy(rank_rows[i], offsets__column)
	}
	return table_rank
}
export const b__row_id = _b('__row_id', ()=>
	writable(null))
export const __row_id = b__row_id()
export type $data_row_filter_input<I> = {
	column:number
	value:I
}
export type $type__inputs__filter__rows__data<I extends unknown> = $data_row_filter_input<I>[]
export type $maybe_type__inputs__filter__rows__data<I extends unknown> =
	maybe_null<$type__inputs__filter__rows__data<I>>
export type type__inputs__filter__rows__data<I extends unknown> =
	Writable<$maybe_type__inputs__filter__rows__data<I>>
export function b__inputs__filter__rows__data<I extends unknown>(ctx?:object) {
	return _b('__inputs__filter__rows__data', ctx=>{
		const __inputs__filter__rows__data = writable<$maybe_type__inputs__filter__rows__data<I>>(
			null
		) as type__inputs__filter__rows__data<I>
		if (has__dom) {
			subscribe(
				b__table<I>(ctx),
				_clear_store<type__inputs__filter__rows__data<I>>(
					__inputs__filter__rows__data, null
				)
			)
		}
		return __inputs__filter__rows__data
	})(ctx)
}
export const __inputs__filter__rows__data = b__inputs__filter__rows__data()
export function b__filter__rows__data<I>(ctx?) {
	return _b('__filter__rows__data', (ctx)=>
		derived([
				b__inputs__filter__rows__data<I>(ctx),
				b__rows__data<I>(ctx)
			],
			(
				[maybe__inputs__filter__rows__data, maybe__data_row_a1]:[
					$maybe_type__inputs__filter__rows__data<I>, $maybe__data_rows_type<I>
				])=>{
				if (!maybe__inputs__filter__rows__data || !maybe__data_row_a1) return
				const inputs__filter__rows__data = maybe__inputs__filter__rows__data as $type__inputs__filter__rows__data<I>
				const data_row_a1 = maybe__data_row_a1 as $data_rows_type<I>
				const filter_rows = [] as I[][]
				for (let i = 0; i < (data_row_a1 as unknown[]).length; i++) {
					const row = data_row_a1[i]
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
						filter_rows.push(row)
					}
				}
				return filter_rows
			}) as data_rows_type<I>
	)(ctx)
}
export const __filter__rows__data = b__filter__rows__data()
export function b__table__filter__rows__data<I extends unknown>(ctx?) {
	return _b('__table__filter__rows__data', ctx=>
		derived(
			b__filter__rows__data<I>(ctx),
			$filter__rows__data=>_maybe_key_hash<$data_rows_type<I>>($filter__rows__data, 'row_id')
		)
	)(ctx)
}
export const __table__filter__rows__data = b__table__filter__rows__data()
export type $type__highlight__rows__data<I extends unknown> = I[][]
export type $maybe_type__highlight__rows__data<I extends unknown> =
	maybe_null<$type__highlight__rows__data<I>>
export type type__highlight__rows__data<I extends unknown> =
	Writable<$maybe_type__highlight__rows__data<I>>
export function b__highlight__rows__data<I extends unknown>(ctx?) {
	return _b<type__highlight__rows__data<I>>('__highlight__rows__data',
		()=>writable(null))(ctx)
}
export type $type__table__highlight__rows__data<I extends unknown> = Record<string, I[]>
export type $maybe_type__table__highlight__rows__data<I extends unknown> =
	maybe_null<$type__table__highlight__rows__data<I>>
export type type__table__highlight__rows__data<I extends unknown> =
	Writable<$maybe_type__table__highlight__rows__data<I>>
export function b__table__highlight__rows__data<I extends unknown>(ctx?) {
	return _b<type__table__highlight__rows__data<I>>('__table__highlight__rows__data', ()=>
		writable(null)
	)(ctx)
}
export function b__assign__highlight__rows<I extends unknown>(ctx?) {
	return _b('assign__highlight__rows', ctx=>{
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
			const data_rows = filter__rows__data || rows__data
			let maybe_highlight__rows__data = null as maybe_null<I[][]>
			if (data_rows) {
				maybe_highlight__rows__data = []
				for (let i = 0; i < data_rows.length; i++) {
					const row = data_rows[i]
					if (row.row_id === row_id) {
						maybe_highlight__rows__data.push(row)
					}
				}
			}
			const table__highlight__rows__data =
				maybe_highlight__rows__data
				&& _key_hash<I[][]>(maybe_highlight__rows__data, 'row_id')
			b__highlight__rows__data<I>(ctx)
				.set(maybe_highlight__rows__data)
			b__table__highlight__rows__data<I>(ctx)
				.set(table__highlight__rows__data)
		}
	})(ctx)
}
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
