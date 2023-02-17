import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { column_offsets_ } from '../column_offsets_/index.js'
import { columns__ } from '../columns__/index.js'
/** @type {typeof import('./index.d.ts').column_offsets__} */
export const column_offsets__ = be_('column_offsets__', ctx=>
	computed_(columns__(ctx),
		columns=>
			column_offsets_(columns)))
export { column_offsets__ as column_offsets$_ }

