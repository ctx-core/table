import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { table$_ } from './table$_.js'
export const columns$_ = be_<columns$_T>('columns$', ctx=>
	computed_(
		table$_(ctx),
		(table)=>table?.[0]!,
	))
export type columns$_T = ReadableAtom_<string[]>
