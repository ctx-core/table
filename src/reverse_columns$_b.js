import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { columns$_b } from './columns$_b';
const key = 'reverse_columns$';
export const reverse_columns$_b = be_(key, ctx => derived$(columns$_b(ctx), columns => columns
    && columns.slice(0).reverse()));
export { reverse_columns$_b as b__reverse__columns };
//# sourceMappingURL=src/reverse_columns$_b.js.map