interface MemberInterface {
  name: string,
  age: number
}

const memberI: MemberInterface = {
  name: 'maeda',
  age: 25
}

interface HobbyInterface {
  hobby: string
}

interface ProfileInterface extends MemberInterface, HobbyInterface {}

const memberInfoI: ProfileInterface = {
  name: '山田',
  age: 21,
  hobby: 'サッカー'
}

console.log(memberInfoI.hobby)
