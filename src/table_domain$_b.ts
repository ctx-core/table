import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'table_domain$'
export const table_domain$_b:B<table_domain$_T> = be_(key, ()=>
	writable$([[0, 10.0]]) as table_domain$_T
)
export type table_domain$_T = Writable$<number[][]>
export {
	table_domain$_b as b__table_domain
}
