import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { _rows } from './_rows'
import { $table_T, table_b } from './table_b'
import { column_offsets_b } from './column_offsets_b'
import type { column_offsets_I } from './column_offsets_I'
import type { Row } from './Row'
import type { table_Ctx } from './table_Ctx'
const key = 'rows'
export function rows_b<Val extends unknown = unknown>(ctx:table_Ctx<Val>) {
	const table = table_b<Val>(ctx)
	return _b<table_Ctx<Val>, typeof key>(key, ctx=>
		derived$([
			table,
			column_offsets_b(ctx)
		], ([$table, $column_offsets])=>{
			return _rows($table as $table_T<Val>, $column_offsets as column_offsets_I)
		}) as rows_T<Val>
	)(ctx)
}
export interface rows_T<Val extends unknown = unknown> extends Readable$<Row<Val>[]> {}
export {
	rows_b as b__rows
}
