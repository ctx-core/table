import { Writable$ } from '@ctx-core/store';
import type { table_Ctx } from './table_Ctx';
export declare function table$_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): table$_T<Val>;
export declare type table_T<Val extends unknown = unknown> = [string[]?, ...Val[][]];
export interface table$_T<Val extends unknown = unknown> extends Writable$<table_T<Val>> {
}
export { table$_b as b__table };
