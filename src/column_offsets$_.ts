import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { columns$_ } from './columns$_.js'
import { column_offsets_ } from './column_offsets_.js'
import type { column_offsets_T } from './column_offsets_T.js'
export const column_offsets$_ = be_<column_offsets$_T>('column_offsets$', ctx=>
	computed_(
		columns$_(ctx),
		columns=>column_offsets_(columns)
	)
)
export type column_offsets$_T = ReadableAtom_<column_offsets_T>
