import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
export const ticks_domain__:B<WritableAtom_<number[]>> = be_('ticks_domain__', ()=>
	atom_([0, 5.0, 10.0]))
export { ticks_domain__ as ticks_domain$_ }
