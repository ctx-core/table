import { Writable$ } from '@ctx-core/store';
import type { Row } from './Row';
export declare function row_b<Val extends unknown = unknown>(ctx: row_ctx_I): row_T<Val>;
export interface row_ctx_I<Val extends unknown = unknown> {
    row?: Row<Val>;
}
export interface row_T<Val extends unknown = unknown> extends Writable$<Row<Val> | undefined> {
}
export { row_b as b__row };
