import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
export const table_domain$_:B<table_domain$_T> = be_('table_domain$', ()=>
	atom$([[0, 10.0]]) as table_domain$_T
)
export type table_domain$_T = WritableAtom$<number[][]>
