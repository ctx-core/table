import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { $table_T, table_b, table_Ctx } from './table_b'
const key = 'columns'
export interface columns_Ctx<Val extends unknown = unknown> extends table_Ctx<Val> {
	columns?:columns_T
}
export function columns_b<Val extends unknown = unknown>(ctx:columns_Ctx<Val>) {
	return _b<columns_Ctx<Val>, typeof key>(key, ()=>
		derived$(
			table_b<Val>(ctx),
			($table:$table_T<unknown>)=>$table?.[0] as $columns_T,
		)
	)(ctx)
}
export type $columns_T = string[]
export interface columns_T extends Readable$<$columns_T> {}
export {
	columns_b as b__columns
}
