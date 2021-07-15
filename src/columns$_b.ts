import { be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { table_T, table$_b } from './table$_b.js'
import type { table_Ctx } from './table_Ctx'
const key = 'columns$'
export function columns$_b<Val extends unknown = unknown>(ctx:table_Ctx<Val>) {
	return be_<table_Ctx<Val>, typeof key>(key, ()=>
		derived$(
			table$_b<Val>(ctx),
			($table:table_T<unknown>)=>$table?.[0] as columns_T,
		)
	)(ctx)
}
export type columns_T = string[]
export interface columns$_T extends Readable$<columns_T> {}
export {
	columns$_b as b__columns
}
