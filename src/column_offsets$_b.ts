import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { columns$_b } from './columns$_b.js'
import { column_offsets_ } from './column_offsets_.js'
import type { column_offsets_I } from './column_offsets_I.js'
const key = 'column_offsets$'
export function column_offsets$_b<Val extends unknown = unknown>(ctx:Ctx) {
	return be_<column_offsets$_T>(key, ()=>
		computed$(
			columns$_b<Val>(ctx),
			(columns)=>column_offsets_(columns)
		)
	)(ctx)
}
export type column_offsets$_T = ReadableAtom$<column_offsets_I>
export {
	column_offsets$_b as b__offsets__column
}
