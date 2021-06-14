import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { column_offsets_ } from './column_offsets_';
import { columns$_b } from './columns$_b';
const key = 'column_offsets$';
export function column_offsets$_b(ctx) {
    return be_(key, () => derived$(columns$_b(ctx), column_offsets_))(ctx);
}
export { column_offsets$_b as b__offsets__column };
//# sourceMappingURL=src/column_offsets$_b.js.map