import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { table__ } from '../table__/index.js'
/** @type {typeof import('./index.d.ts').columns__} */
export const columns__ = be_('columns__', ctx=>
	computed_(table__(ctx),
		table=>table?.[0]))
export { columns__ as columns$_ }
