import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { row_type } from './row_type'
export function table_b<I extends row_type, C extends object = object>(ctx:C) {
	return _b<table_type<I>, C>('table', ()=>
		writable<$table_type<I>>([]) as table_type<I>
	)(ctx)
}
export type $table_type<I extends unknown> = [string[]?, ...I[]]
export interface table_type<I extends unknown> extends Writable<$table_type<I>> {}
export {
	table_b as b__table
}
