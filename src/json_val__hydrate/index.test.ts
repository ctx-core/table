import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { json_val__hydrate } from '../index.js'
test('json_val__hydrate', ()=>{
	equal(json_val__hydrate(5), 5)
	equal(json_val__hydrate('2022-1-1'), new Date('2022-1-1'))
	equal(json_val__hydrate('test'), 'test')
	equal(json_val__hydrate(true), true)
	equal(json_val__hydrate(null), null)
	equal(json_val__hydrate(undefined), undefined)
})
test.run()
