import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { Row } from '../_types'
export declare function row__<
	Val extends unknown = unknown
>(ctx:Ctx):row__T<Val>
export type row__T<
	Val extends unknown = unknown
> = WritableAtom_<Row<Val>|undefined>
export { row__ as row$_ }
