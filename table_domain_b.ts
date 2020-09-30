import { writable, Writable } from '@ctx-core/store'
import { _b } from '@ctx-core/object'
export const table_domain_b = _b('table_domain', ()=>
	writable([[0, 10.0]]))
export const b__domain__table = table_domain_b
export type $table_domain_type = number[][]
export type table_domain_type = Writable<$table_domain_type>
