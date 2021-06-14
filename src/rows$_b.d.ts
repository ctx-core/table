import { Readable$ } from '@ctx-core/store';
import type { Row } from './Row';
import type { table_Ctx } from './table_Ctx';
export declare function rows$_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): rows$_T<Val>;
export interface rows$_T<Val extends unknown = unknown> extends Readable$<Row<Val>[]> {
}
export { rows$_b as b__rows };
