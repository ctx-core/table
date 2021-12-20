import { WritableAtom$, atom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
const key = 'table$'
export function table$_b<Val extends unknown = unknown>(ctx:Ctx) {
	return be_<table$_T<Val>>(key, ()=>
		atom$<table_T<Val>>([]) as table$_T<Val>
	)(ctx)
}
export type table_T<Val extends unknown = unknown> = [string[]?, ...Val[][]]
export interface table$_T<Val extends unknown = unknown> extends WritableAtom$<table_T<Val>> {}
export {
	table$_b as b__table
}
