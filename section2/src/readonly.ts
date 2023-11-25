type MemberTypeR = {
  readonly name: string,
  age: number
}

const memberR: MemberTypeR = {
  name: 'fuga',
  age: 22
}

// readonlyのため、エラーになる
// memberR.name = '流川'

console.log(memberInfo.name)

