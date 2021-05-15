import { Readable$ } from '@ctx-core/store';
import { table_ctx_I } from './table_b';
import type { Row } from './Row';
export declare function rows_b<Val extends unknown = unknown>(ctx: rows_ctx_I<Val>): rows_T<Val>;
export interface rows_ctx_I<Val extends unknown = unknown> extends table_ctx_I<Val> {
    rows?: rows_T<Val>;
}
export interface rows_T<Val extends unknown = unknown> extends Readable$<Row<Val>[]> {
}
export { rows_b as b__rows };
