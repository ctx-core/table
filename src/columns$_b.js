import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { table$_b } from './table$_b';
const key = 'columns$';
export function columns$_b(ctx) {
    return be_(key, () => derived$(table$_b(ctx), ($table) => $table === null || $table === void 0 ? void 0 : $table[0]))(ctx);
}
export { columns$_b as b__columns };
//# sourceMappingURL=src/columns$_b.js.map