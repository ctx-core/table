import { _b } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { $table_type, table_b } from './table_b'
export function columns_b(ctx?:object) {
	return (
		_b<columns_type>('columns', ctx=>
			derived(
				table_b(ctx),
				($table:$table_type<unknown>)=>$table?.[0] as $columns_type,
			)
		)(ctx))
}
export type $columns_type = string[]
export type columns_type = Readable<$columns_type>
export const b__columns = columns_b
