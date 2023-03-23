export type header_row_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
	ColDefs extends [string, any][]
	? { [K in keyof ColDefs]:ColDefs[K][0] }
	: ColDefs extends any[]
		? ColDefs
		: string[]
