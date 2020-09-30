import { Readable } from '@ctx-core/store';
import type { row_type } from './row_type';
export declare function rows_b<I extends row_type>(ctx?: object): Readable<I[]>;
export declare const b__rows: typeof rows_b;
