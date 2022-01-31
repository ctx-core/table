import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { table$_ } from './table$_.js'
const key = 'columns$'
export const columns$_ = be_<columns$_T>(key, ctx=>
	computed$(
		table$_(ctx),
		(table)=>table?.[0]!,
	))
export type columns$_T = ReadableAtom$<string[]>
