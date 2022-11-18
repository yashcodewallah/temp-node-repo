//after npm i lodash... we were able to use the lodash module....

const lodash=require('lodash')
const items=[1,[2,[3,[4]]]]
const newitems=lodash.flattenDeep(items)
console.log(newitems)