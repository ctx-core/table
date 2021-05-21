import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'table'
export interface table_ctx_I<Val extends unknown = unknown> {
	table?:table_T<Val>
}
export function table_b<Val extends unknown = unknown>(ctx:table_ctx_I<Val>) {
	return _b<table_ctx_I<Val>, typeof key>(key, ()=>
		writable$<$table_T<Val>>([]) as table_T<Val>
	)(ctx)
}
export type $table_T<Val extends unknown = unknown> = [string[]?, ...Val[][]]
export interface table_T<Val extends unknown = unknown> extends Writable$<$table_T<Val>> {}
export {
	table_b as b__table
}
