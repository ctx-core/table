import { Readable$ } from '@ctx-core/store';
import { columns_ctx_I } from './columns_b';
export interface column_offsets_ctx_I<Val extends unknown = unknown> extends columns_ctx_I<Val> {
    column_offsets?: Readable$<Record<string, number>>;
}
export declare function column_offsets_b<Val extends unknown = unknown>(ctx: column_offsets_ctx_I<Val>): Readable$<Record<string, number>>;
export { column_offsets_b as b__offsets__column };
