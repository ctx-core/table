import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { columns__ } from './columns__.js'
export const reverse_columns__:B<ReadableAtom_<string[]|null>> = be_('reverse_columns__', ctx=>
	computed_(
		columns__(ctx),
		columns=>
			columns ? columns.slice(0).reverse() : null))
export { reverse_columns__ as reverse_columns$_ }
