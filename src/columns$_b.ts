import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { table_T, table$_b } from './table$_b.js'
const key = 'columns$'
export function columns$_b<Val extends unknown = unknown>(ctx:Ctx) {
	return be_<columns$_T>(key, ()=>
		computed$(
			table$_b<Val>(ctx),
			(table:table_T<unknown>)=>table?.[0] as string[],
		)
	)(ctx)
}
export type columns$_T = ReadableAtom$<string[]>
export {
	columns$_b as b__columns
}
