import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { set_row } from './set_row'
const key = 'table$'
export function table$_<Val extends unknown = unknown>(ctx:Ctx) {
	return table$_b(ctx) as table$_T<Val>
}
const table$_b = be_<table$_T>(key, ctx=>{
	const table$ = atom$<table_T>([])
	if (has_dom) {
		table$.subscribe(()=>set_row(ctx))
	}
	return table$
})
export type table_T<Val extends unknown = unknown> = [string[]?, ...Val[][]]
export interface table$_T<Val extends unknown = unknown> extends WritableAtom$<table_T<Val>> {}
