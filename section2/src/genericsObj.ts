type genObject<T, U> = {
  name: string,
  age: number,
  memo: T,
  value: U,
}

const soccerMember: genObject<string, number> = {
  name: '三苫',
  age: 22,
  memo: 'メモ',
  value: 999
}

const basketMember: genObject<number, string> = {
  name: '三苫',
  age: 22,
  memo: 123,
  value: '映画'
}

