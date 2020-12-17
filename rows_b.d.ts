import { Readable } from '@ctx-core/store';
import type { row_type } from './row_type';
export declare function rows_b<I extends row_type, C extends object = object>(ctx: C): Readable<I[]>;
export { rows_b as b__rows };
