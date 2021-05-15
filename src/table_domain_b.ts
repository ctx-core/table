import { writable, Writable } from '@ctx-core/store'
import { _b } from '@ctx-core/object'
export const table_domain_b = _b('table_domain', ()=>
	writable([[0, 10.0]]) as table_domain_type
)
export type $table_domain_type = number[][]
export interface table_domain_type extends Writable<$table_domain_type> {}
export {
	table_domain_b as b__table_domain
}
