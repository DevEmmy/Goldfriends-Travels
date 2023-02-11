import React from 'react'
import { AvailableContainer } from './Styled'

const Available = () => {
    const data = {
        image: "https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "A Trip to Dubia",
        description: "Embark on an unforgettable adventure in the land of luxury and wonder - Dubai!",
        price: "N1,000,000"
    }
  return (
    <AvailableContainer>
        <div className="top">
            <img src={data.image} alt="" />
            <h4>{data.title}</h4>
        </div>
        <div className="text">
            <p>{data.description}</p>
            <p className="price">{data.price}</p>
        </div>
    </AvailableContainer>
  )
}

export default Available