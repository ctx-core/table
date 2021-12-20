import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { column_offsets$_b } from './column_offsets$_b.js'
import type { column_offsets_I } from './column_offsets_I.js'
import type { Row } from './Row.js'
import { rows_ } from './rows_.js'
import { table_T, table$_b } from './table$_b.js'
const key = 'rows$'
export function rows$_b<Val extends unknown = unknown>(ctx:Ctx):rows$_T<Val> {
	const table = table$_b<Val>(ctx)
	return be_<rows$_T<Val>>(key, ctx=>
		computed$([
			table,
			column_offsets$_b(ctx)
		], (table, column_offsets)=>{
			return rows_(table as table_T<Val>, column_offsets as column_offsets_I)
		}) as rows$_T<Val>
	)(ctx)
}
export type rows$_T<Val extends unknown = unknown> = ReadableAtom$<Row<Val>[]>
export {
	rows$_b as b__rows
}
