type MemberType = {
  name: string,
  age: number
}

const memberT: MemberType = {
  name: 'fuga',
  age: 22
}

type MemberHobby = {
  hobby: string
}

type MemberProfile = MemberType & MemberHobby


const memberInfo: MemberProfile = {
  name: 'piyo',
  age: 40,
  hobby: '趣味'
}

console.log(memberInfo.hobby)
