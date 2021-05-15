import { Readable$ } from '@ctx-core/store';
import { columns_ctx_I } from './columns_b';
export declare const column_offsets_b: import("@ctx-core/object").Be<Readable$<Record<string, number>>, column_offsets_ctx_I<unknown>>;
export interface column_offsets_ctx_I<Val extends unknown = unknown> extends columns_ctx_I<Val> {
    column_offsets?: Readable$<Record<string, number>>;
}
export { column_offsets_b as b__offsets__column };
