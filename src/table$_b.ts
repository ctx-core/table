import { be_, Ctx } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'table$'
export function table$_b<Val extends unknown = unknown>(ctx:Ctx) {
	return be_<table$_T<Val>>(key, ()=>
		writable$<table_T<Val>>([]) as table$_T<Val>
	)(ctx)
}
export type table_T<Val extends unknown = unknown> = [string[]?, ...Val[][]]
export interface table$_T<Val extends unknown = unknown> extends Writable$<table_T<Val>> {}
export {
	table$_b as b__table
}
