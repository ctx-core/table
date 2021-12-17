import { be_, Ctx } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { table_T, table$_b } from './table$_b.js'
const key = 'columns$'
export function columns$_b<Val extends unknown = unknown>(ctx:Ctx) {
	return be_<columns$_T>(key, ()=>
		derived$(
			table$_b<Val>(ctx),
			($table:table_T<unknown>)=>$table?.[0] as string[],
		)
	)(ctx)
}
export type columns$_T = Readable$<string[]>
export {
	columns$_b as b__columns
}
