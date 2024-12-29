import React from 'react'

const DisplayUsers = (props) => {
    console.log(props);

    let {firstname,city,age} = props
    
  return (
    <>
        <div className="displayuser">
            <p><span>Firstname : </span>{firstname}</p>
            <p><span>Age : </span>{age}</p>
            <p><span>City : </span>{city}</p>
        </div>
    </>
  )
}

export default DisplayUsers