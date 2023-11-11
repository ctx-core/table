import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { json_val__dehydrate } from '../index.js'
test('json_val__dehydrate', ()=>{
	equal(json_val__dehydrate(5), 5)
	equal(json_val__dehydrate(new Date('2022-1-1')), new Date('2022-1-1').toISOString())
	equal(json_val__dehydrate('test'), 'test')
	equal(json_val__dehydrate(true), true)
	equal(json_val__dehydrate(null), null)
	equal(json_val__dehydrate(undefined), undefined)
})
test.run()
