import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
import type { row_type } from './row_type'
export function table_b<I extends row_type>(ctx?:object) {
	return _b<table_type<I>>('table', ()=>
		writable<$table_type<I>>([]))(ctx)
}
export const b__table = table_b
export type $table_type<I extends unknown> = [string[]?, ...I[]]
export type table_type<I extends unknown> = Writable<$table_type<I>>
