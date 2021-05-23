import { _b } from '@ctx-core/object'
import { derived$ } from '@ctx-core/store'
import { _column_offsets } from './_column_offsets'
import { columns_b } from './columns_b'
import type { table_Ctx } from './table_Ctx'
const key = 'column_offsets'
export function column_offsets_b<Val extends unknown = unknown>(
	ctx:table_Ctx<Val>
) {
	return _b<table_Ctx<Val>, typeof key>(key, ()=>
		derived$(columns_b<Val>(ctx), _column_offsets))(ctx)
}
export {
	column_offsets_b as b__offsets__column
}
