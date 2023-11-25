type GenObjectE<T extends number | string> = {
  sample: T
}

const testObjE: GenObjectE<string> = {
  sample: 'ほげ'
}


type GenObjectD<T = string> = {
  sample: T
}

const testObjD: GenObjectD<number> = {
  sample: 123
}
