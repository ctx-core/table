import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { columns__ } from '../columns__/index.js'
/** @type {typeof import('./index.d.ts').reverse_columns__} */
export const reverse_columns__ = be_('reverse_columns__', ctx=>
	computed_(
		columns__(ctx),
		columns=>
			columns
			? columns.slice(0).reverse()
			: null))
export { reverse_columns__ as reverse_columns$_ }
