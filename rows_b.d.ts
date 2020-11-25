import { Readable } from '@ctx-core/store';
export declare function rows_b<I extends row_type, C extends object = object>(ctx: C): Readable<I[]>;
export declare const b__rows: typeof rows_b;
import type { row_type } from './row_type';
