import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { $table_T, table_b } from './table_b'
import type { table_Ctx } from './table_Ctx'
const key = 'columns'
export function columns_b<Val extends unknown = unknown>(ctx:table_Ctx<Val>) {
	return _b<table_Ctx<Val>, typeof key>(key, ()=>
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
