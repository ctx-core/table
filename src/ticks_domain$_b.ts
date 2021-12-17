import { B, be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'ticks_domain$'
export const ticks_domain$_b:B<ticks_domain$_T> = be_(key, ()=>
	writable$([0, 5.0, 10.0])
)
export type ticks_domain_T = number[]
export type ticks_domain$_T = Writable$<number[]>
export {
	ticks_domain$_b as b__ticks_domain
}
