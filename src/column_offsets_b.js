import { _b } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { _column_offsets } from './_column_offsets';
import { columns_b } from './columns_b';
const key = 'column_offsets';
export function column_offsets_b(ctx) {
    return _b(key, () => derived$(columns_b(ctx), _column_offsets))(ctx);
}
export { column_offsets_b as b__offsets__column };
