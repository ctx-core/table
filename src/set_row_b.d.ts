import { row_id_ctx_I } from './row_id_b';
import { table_ctx_I } from './table_b';
export declare function set_row_b<Val extends unknown = unknown>(ctx: set_row_ctx_I): () => void;
export interface set_row_ctx_I<Val extends unknown = unknown> extends row_id_ctx_I, table_ctx_I<Val> {
    set_row?: () => void;
}
export { set_row_b as b__set__row };
