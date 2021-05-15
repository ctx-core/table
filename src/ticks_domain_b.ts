import { _b } from '@ctx-core/object'
import { writable } from '@ctx-core/store'
export const ticks_domain_b = _b('ticks_domain', ()=>
	writable([0, 5.0, 10.0])
)
export {
	ticks_domain_b as b__ticks_domain
}
