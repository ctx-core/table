import { be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { rows_ } from './rows_'
import { table_T, table$_b } from './table$_b'
import { column_offsets$_b } from './column_offsets$_b'
import type { column_offsets_I } from './column_offsets_I'
import type { Row } from './Row'
import type { table_Ctx } from './table_Ctx'
const key = 'rows$'
export function rows$_b<Val extends unknown = unknown>(ctx:table_Ctx<Val>) {
	const table = table$_b<Val>(ctx)
	return be_<table_Ctx<Val>, typeof key>(key, ctx=>
		derived$([
			table,
			column_offsets$_b(ctx)
		], ([$table, $column_offsets])=>{
			return rows_($table as table_T<Val>, $column_offsets as column_offsets_I)
		}) as rows$_T<Val>
	)(ctx)
}
export interface rows$_T<Val extends unknown = unknown> extends Readable$<Row<Val>[]> {}
export {
	rows$_b as b__rows
}