type Member = {name: string}

const getMemberName = (string?: Member) => {
  console.log(string!.name)
}

getMemberName({ name: '三好'})



let memberName!: string

const addName = (val: string) => {
  memberName = val
}

addName('浅野')

console.log(memberName)
