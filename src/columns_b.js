import { _b } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { table_b } from './table_b';
const key = 'columns';
export function columns_b(ctx) {
    return _b(key, () => derived$(table_b(ctx), ($table) => $table === null || $table === void 0 ? void 0 : $table[0]))(ctx);
}
export { columns_b as b__columns };
