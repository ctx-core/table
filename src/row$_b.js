import { be_ } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'row$';
export function row$_b(ctx) {
    return be_(key, () => writable$(undefined))(ctx);
}
export { row$_b as b__row };
//# sourceMappingURL=src/row$_b.js.map