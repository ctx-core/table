import { has_dom } from '@ctx-core/dom'
import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { set_row } from './set_row.js'
export function table__<Val extends unknown = unknown>(ctx:Ctx) {
	return _table__(ctx) as table__T<Val>
}
const _table__ = be_<table__T>('table__', ctx=>{
	const table_ = atom_<table_T>([])
	if (has_dom) {
		table_.subscribe(()=>set_row(ctx))
	}
	return table_
})
export type table_T<Val extends unknown = unknown> = [string[]?, ...Val[][]]
export type table__T<Val extends unknown = unknown> = WritableAtom_<table_T<Val>>
export { table__ as table$_ }
