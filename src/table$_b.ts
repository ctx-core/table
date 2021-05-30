import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { table_Ctx } from './table_Ctx'
const key = 'table$'
export function table$_b<Val extends unknown = unknown>(ctx:table_Ctx<Val>) {
	return _b<table_Ctx<Val>, typeof key>(key, ()=>
		writable$<table_T<Val>>([]) as table$_T<Val>
	)(ctx)
}
export type table_T<Val extends unknown = unknown> = [string[]?, ...Val[][]]
export interface table$_T<Val extends unknown = unknown> extends Writable$<table_T<Val>> {}
export {
	table$_b as b__table
}
