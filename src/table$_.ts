import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { set_row } from './set_row'
export function table$_<Val extends unknown = unknown>(ctx:Ctx) {
	return _table$_(ctx) as table$_T<Val>
}
const _table$_ = be_<table$_T>('table$', ctx=>{
	const table$ = atom_<table_T>([])
	if (has_dom) {
		table$.subscribe(()=>set_row(ctx))
	}
	return table$
})
export type table_T<Val extends unknown = unknown> = [string[]?, ...Val[][]]
export interface table$_T<Val extends unknown = unknown> extends WritableAtom_<table_T<Val>> {}
