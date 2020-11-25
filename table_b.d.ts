import { Writable } from '@ctx-core/store';
import type { row_type } from './row_type';
export declare function table_b<I extends row_type, C extends object = object>(ctx: C): table_type<I>;
export declare type $table_type<I extends unknown> = [string[]?, ...I[]];
export declare type table_type<I extends unknown> = Writable<$table_type<I>>;
export { table_b as b__table };
