import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { column_offsets_ } from './column_offsets_.js'
import type { column_offsets_T } from './column_offsets_T.js'
import { columns__ } from './columns__.js'
export const column_offsets__ = be_<ReadableAtom_<column_offsets_T>>('column_offsets__', ctx=>
	computed_(
		columns__(ctx),
		columns=>column_offsets_(columns)))
export { column_offsets__ as column_offsets$_ }
