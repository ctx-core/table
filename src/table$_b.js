import { be_ } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'table$';
export function table$_b(ctx) {
    return be_(key, () => writable$([]))(ctx);
}
export { table$_b as b__table };
//# sourceMappingURL=src/table$_b.js.map