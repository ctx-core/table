import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { _column_offsets } from './_column_offsets'
import { columns_b, columns_ctx_I } from './columns_b'
const key = 'column_offsets'
export interface column_offsets_ctx_I<Val extends unknown = unknown>
	extends columns_ctx_I<Val> {
	column_offsets?:Readable$<Record<string, number>>
}
export function column_offsets_b<Val extends unknown = unknown>(
	ctx:column_offsets_ctx_I<Val>
) {
	return _b<column_offsets_ctx_I<Val>, typeof key>(key, ()=>
		derived$(columns_b<Val>(ctx), _column_offsets))(ctx)
}
export {
	column_offsets_b as b__offsets__column
}
