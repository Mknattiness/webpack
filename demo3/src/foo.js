// export default function () {
//   console.log('hello')
// }

// module.exports = function () {
//   console.log('hello')
// }

// export const a = 1
// export const b = 2
// export const c = 3

const a = 1
const b = 2
const c = 3

export {
  a, b, c
}

export const d = 4

// 错误的写法：不支持
// export 导出的成员必须引用到内部的一个成员变量/常亮
// export 123

// 错误的写法：不支持
// const e = 5
// export e

// 这是错误的写法：不支持
// export {
//   a: a,
//   b: b,
//   c: c
// }

// export default function () {
//   console.log('hello')
// }

// export default 只能有一次
// export default 123

const str = 'hello world'

// default 相当于起的默认名字
// 这里相当于把 str 的值赋值给了 default
export default str
