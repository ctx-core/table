import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
const key = 'table_domain$'
export const table_domain$_b:B<table_domain$_T> = be_(key, ()=>
	atom$([[0, 10.0]]) as table_domain$_T
)
export type table_domain$_T = WritableAtom$<number[][]>
export {
	table_domain$_b as b__table_domain
}
