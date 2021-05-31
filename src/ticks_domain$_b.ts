import { be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { table_Ctx } from './table_Ctx'
const key = 'ticks_domain$'
export const ticks_domain$_b = be_<table_Ctx, typeof key>(key, ()=>
	writable$([0, 5.0, 10.0])
)
export type ticks_domain_T = number[]
export interface ticks_domain$_T extends Writable$<ticks_domain_T> {}
export {
	ticks_domain$_b as b__ticks_domain
}
