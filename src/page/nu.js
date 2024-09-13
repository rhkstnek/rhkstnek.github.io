import React from 'react'

const Nu = () => {
  let abc = {
    name : 'kim',
    age : 12
  }

  let {name, age} = abc
//   console.log(age)

  let {name : hh} = abc
  console.log('my name =',hh)

  return (
    <div>nu</div>
  )
}

export default Nu