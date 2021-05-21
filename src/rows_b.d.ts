import { Readable$ } from '@ctx-core/store';
import { table_Ctx } from './table_b';
import type { Row } from './Row';
export interface rows_Ctx<Val extends unknown = unknown> extends table_Ctx<Val> {
    rows?: rows_T<Val>;
}
export declare function rows_b<Val extends unknown = unknown>(ctx: rows_Ctx<Val>): rows_T<Val>;
export interface rows_T<Val extends unknown = unknown> extends Readable$<Row<Val>[]> {
}
export { rows_b as b__rows };
