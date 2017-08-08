// 加载都是 import
//  三种加载方式
// 导出都是 export
//  三种导出方式

// 只加载模块中 export default 的成员
// 如果没有 export default 的成员，则是 undefined
// import foo from './foo'
// console.log(foo)

// 第二种加载方式：
// 对于非 export default 导出的成员，必须通过解构赋值的方式来加载才可以
// 也就是说你需要按需加载才能拿到 export 导出的成员
// import { a, b, c, d } from './foo'

// console.log(a, b, c, d)

// 第三种加载方式：
// 加载所有 export 导出的成员，包括 export default 成员
import * as foo from './foo'
console.log(foo)
