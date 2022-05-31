import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
export const table_domain__:B<WritableAtom_<number[][]>> = be_('table_domain__', ()=>
	atom_([[0, 10.0]]))
export { table_domain__ as table_domain$_ }
