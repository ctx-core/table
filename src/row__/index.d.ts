import type { Be, be_opts_T, Ctx } from '@ctx-core/object'
import type { Row } from '../_types'
export declare function row__<
	Val extends unknown = unknown
>(ctx:Ctx, opts?:be_opts_T):Be<Row<Val>|undefined>
export { row__ as row$_ }
export declare function row_<
	Val extends unknown = unknown
>(ctx:Ctx):Row<Val>|undefined
export declare function row__set<
	Val extends unknown = unknown
>(ctx:Ctx, row:Row<Val>):void
