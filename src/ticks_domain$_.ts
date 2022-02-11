import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
export const ticks_domain$_:B<ticks_domain$_T> = be_('ticks_domain$', ()=>
	atom$([0, 5.0, 10.0])
)
export type ticks_domain$_T = WritableAtom$<number[]>