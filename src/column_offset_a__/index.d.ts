import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
import type { column_offsets_T } from '../_types'
export declare const column_offset_a__:Be<ReadableAtom_<column_offsets_T>>
export { column_offset_a__ as column_offsets$_ }
export declare function column_offsets_(ctx:Ctx):column_offsets_T
export declare function column_offsets__set(ctx:Ctx, column_offset_a:column_offsets_T):void
export declare function column_offset_a__new(column_a:string[]):column_offsets_T
export {
	column_offset_a__new as column_offsets_,
	column_offset_a__new as _column_offsets,
	column_offset_a__new as _offsets__column,
}
