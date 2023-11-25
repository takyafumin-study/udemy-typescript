// const target = <HTMLInputElement>document.getElementById('username')
// target.addEventListener('input', (e) => {
//   console.log(e)
//   if(e.target instanceof HTMLInputElement) {
//     console.log(e.target.value)
//   } else {
//   }
// })


const target = <HTMLInputElement>document.getElementById('username')
target.addEventListener('input', (e) => {
  console.log(e)
  console.log((e.target as HTMLInputElement).value)
})

