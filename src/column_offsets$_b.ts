import { be_, Ctx } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { columns$_b } from './columns$_b.js'
import { column_offsets_ } from './column_offsets_.js'
import type { column_offsets_I } from './column_offsets_I.js'
const key = 'column_offsets$'
export function column_offsets$_b<Val extends unknown = unknown>(ctx:Ctx) {
	return be_<column_offsets$_T>(key, ()=>
		derived$(columns$_b<Val>(ctx), column_offsets_)
	)(ctx)
}
export type column_offsets$_T = Readable$<column_offsets_I>
export {
	column_offsets$_b as b__offsets__column
}
