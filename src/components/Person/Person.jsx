import React from 'react'

const Person = (props) => {
  return (
    <div>
        Esta persona es {props.name} , se apellida {props.surname} y tiene {props.age} años.
    </div>
    
  )
}

export default Person