import { Readable$ } from '@ctx-core/store';
import { columns_Ctx } from './columns_b';
export interface column_offsets_Ctx<Val extends unknown = unknown> extends columns_Ctx<Val> {
    column_offsets?: Readable$<Record<string, number>>;
}
export declare function column_offsets_b<Val extends unknown = unknown>(ctx: column_offsets_Ctx<Val>): Readable$<Record<string, number>>;
export { column_offsets_b as b__offsets__column };
