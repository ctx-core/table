import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { column_offsets$_ } from './column_offsets$_.js'
import type { column_offsets_T } from './column_offsets_T.js'
import type { Row } from './Row.js'
import { rows_ } from './rows_.js'
import { table$_ } from './table$_.js'
const key = 'rows$'
export function rows$_<Val extends unknown = unknown>(ctx:Ctx):rows$_T<Val> {
	return rows$_b(ctx) as rows$_T<Val>
}
const rows$_b = be_<rows$_T>(key, ctx=>
	computed$([
		table$_(ctx),
		column_offsets$_(ctx)
	], (table, column_offsets)=>{
		return rows_(table, column_offsets as column_offsets_T)
	}) as rows$_T
)
export type rows$_T<Val extends unknown = unknown> = ReadableAtom$<Row<Val>[]>
