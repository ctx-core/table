import { _b } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { $table_type, table_b } from './table_b'
import type { row_type } from './row_type'
export function columns_b<I extends row_type, C extends object = object>(ctx:C) {
	return (
		_b<columns_type, C>('columns', ctx=>
			derived(
				table_b<I>(ctx),
				($table:$table_type<unknown>)=>$table?.[0] as $columns_type,
			)
		)(ctx))
}
export type $columns_type = string[]
export type columns_type = Readable<$columns_type>
export const b__columns = columns_b
