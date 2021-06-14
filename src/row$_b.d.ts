import { Writable$ } from '@ctx-core/store';
import type { Row } from './Row';
import type { table_Ctx } from './table_Ctx';
export declare function row$_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): row$_T<Val>;
export interface row$_T<Val extends unknown = unknown> extends Writable$<Row<Val> | undefined> {
}
export { row$_b as b__row };
