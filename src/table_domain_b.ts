import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'table_domain'
export interface table_domain_Ctx {
	table_domain?:table_domain_T
}
export const table_domain_b = _b<table_domain_Ctx, typeof key>(key, ()=>
	writable$([[0, 10.0]]) as table_domain_T
)
export type $table_domain_T = number[][]
export interface table_domain_T extends Writable$<$table_domain_T> {}
export {
	table_domain_b as b__table_domain
}
