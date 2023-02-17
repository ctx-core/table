import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { Row } from '../_types'
export declare function rows__<
	Val extends unknown = unknown
>(ctx:Ctx):rows__T<Val>
export type rows__T<
	Val extends unknown = unknown
> = ReadableAtom_<Row<Val>[]>
export { rows__ as rows$_ }
