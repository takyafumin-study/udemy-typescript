// 配列
const arrayTest1:string[] = ['test', 'test2']

arrayTest1.push('123')

// 配列：UNION
const arrayTest2:(string| number)[] = ['aaa', 123]

arrayTest2.push(123)

// 配列：順番
const arrayTest3:[string, number, boolean] = ['aaa', 123, false]
