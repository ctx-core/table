import { Writable$ } from '@ctx-core/store';
import type { Row } from './Row';
import type { table_Ctx } from './table_Ctx';
export declare function row_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): Writable$<Row<Val> | undefined>;
export interface row_T<Val extends unknown = unknown> extends Writable$<Row<Val> | undefined> {
}
export { row_b as b__row };
