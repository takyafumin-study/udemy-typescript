function funcTest(str: string, int: number): void {
  console.log(`文字は${str}, 値は${int}です`)
}

funcTest('aaa', 123)

const arrowFuncTest = (str: string, int: number): void => {
  console.log(`文字は${str}, 値は${int}です`)
}

arrowFuncTest('iii', 456)

// 引数：省略
const funcTestQ = (str: string, int?: number): void => {
  console.log(str, int)
}

funcTestQ('bbb')

// デフォルトパラメータ
const funcTestD = (int?: number, str: string = 'aaa'): void => {
  console.log(str, int)
}

funcTestD(123)

// 可変長パラメータ
const eachNumber = (...items: number[]): void => {
  for (const item of items) {
    console.log(item)
  }
}

eachNumber(1, 2, 3)
