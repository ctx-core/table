import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {typeof import('./index.d.ts').ticks_domain__} */
export const ticks_domain__ = be_('ticks_domain__', ()=>
	atom_([
		0,
		5.0,
		10.0
	]))
export { ticks_domain__ as ticks_domain$_ }
