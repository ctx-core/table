import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { table_Ctx } from './table_Ctx'
const key = 'table_domain$'
export const table_domain$_b:B<table_Ctx, typeof key> = be_(key, ()=>
	writable$([[0, 10.0]]) as table_domain$_T
)
export type table_domain_T = number[][]
export interface table_domain$_T extends Writable$<table_domain_T> {}
export {
	table_domain$_b as b__table_domain
}
