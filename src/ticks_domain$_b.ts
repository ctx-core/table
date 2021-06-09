import { B, be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { table_Ctx } from './table_Ctx'
const key = 'ticks_domain$'
export const ticks_domain$_b:B<table_Ctx, typeof key> = be_(key, ()=>
	writable$([0, 5.0, 10.0])
)
export type ticks_domain_T = number[]
export interface ticks_domain$_T extends Writable$<ticks_domain_T> {}
export {
	ticks_domain$_b as b__ticks_domain
}
