import { Readable$ } from '@ctx-core/store';
import type { Row } from './Row';
import type { table_Ctx } from './table_Ctx';
export declare function rows_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): rows_T<Val>;
export interface rows_T<Val extends unknown = unknown> extends Readable$<Row<Val>[]> {
}
export { rows_b as b__rows };
