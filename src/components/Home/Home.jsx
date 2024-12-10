import React from 'react'

const Home = (props) => {
    console.log(props)
  return (
    <>
    {
            props.plates.map(plate => {
                return(
                    <div key={plate.id}>
                    <p>{plate.name}</p>
                    <p>{plate.description}</p>
                    <p>{plate.price}</p>

                    </div>
                )
            })
    }

    </>
  )
}


export default Home