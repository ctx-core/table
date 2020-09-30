import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { _column_offsets } from './_column_offsets'
import { columns_b } from './columns_b'
export const column_offsets_b = _b('__offsets__column', ctx=>
	derived(columns_b(ctx), _column_offsets))
export const b__offsets__column = column_offsets_b
