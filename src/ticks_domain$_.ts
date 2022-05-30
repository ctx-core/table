import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
export const ticks_domain$_:B<ticks_domain$_T> = be_('ticks_domain$', ()=>
	atom_([0, 5.0, 10.0])
)
export type ticks_domain$_T = WritableAtom_<number[]>
