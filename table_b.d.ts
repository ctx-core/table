import { Writable } from '@ctx-core/store';
import type { row_type } from './row_type';
export declare function table_b<I extends row_type>(ctx?: object): table_type<I>;
export declare const b__table: typeof table_b;
export declare type $table_type<I extends unknown> = [string[]?, ...I[]];
export declare type table_type<I extends unknown> = Writable<$table_type<I>>;
