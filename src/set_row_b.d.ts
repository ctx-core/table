import { row_id_Ctx } from './row_id_b';
import { table_Ctx } from './table_b';
import { row_Ctx } from './row_b';
export interface set_row_Ctx<Val extends unknown = unknown> extends row_Ctx<Val>, row_id_Ctx, table_Ctx<Val> {
    set_row?: () => void;
}
export declare function set_row_b<Val extends unknown = unknown>(ctx: set_row_Ctx<Val>): () => void;
export { set_row_b as b__set__row };
