import { _b } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { _rows } from './_rows'
import { $table_type, table_b } from './table_b'
import { column_offsets_b } from './column_offsets_b'
export function rows_b<I extends row_type, C extends object = object>(ctx:C) {
	const table = table_b<I>(ctx)
	return _b<Readable<I[]>, C>('rows', ctx=>
		derived([
			table,
			column_offsets_b(ctx)
		], ([$table, $column_offsets])=>{
			return _rows($table as $table_type<I>, $column_offsets as column_offsets_type)
		}) as Readable<I[]>
	)(ctx)
}
export const b__rows = rows_b
import type { column_offsets_type } from './column_offsets_type'
import type { row_type } from './row_type'
