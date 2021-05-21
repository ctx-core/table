import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'ticks_domain'
export interface ticks_domain_Ctx {
	ticks_domain?:ticks_domain_T
}
export const ticks_domain_b = _b<ticks_domain_Ctx, typeof key>(key, ()=>
	writable$([0, 5.0, 10.0])
)
export type $ticks_domain_T = number[]
export interface ticks_domain_T extends Writable$<$ticks_domain_T> {}
export {
	ticks_domain_b as b__ticks_domain
}
