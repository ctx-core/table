import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { table__ } from './table__.js'
export const columns__ = be_<ReadableAtom_<string[]>>('columns__', ctx=>
	computed_(
		table__(ctx),
		(table)=>table?.[0]!))
export { columns__ as columns$_ }
