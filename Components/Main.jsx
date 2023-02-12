import React from 'react'
import Available from './Available'
import { MainContainer } from './Styled'

const Main = () => {
  return (
    <MainContainer>
        <div className="why">
            <h2>Why you should choose us</h2>
            <p>
            Say goodbye to long lines, complicated paperwork, and endless phone calls. Book your travel tickets and process your visa with us for a hassle-free experience that allows you to focus on what truly matters - making memories on your trip. Our team of experts will take care of every detail, ensuring your visa is processed efficiently and your tickets are booked securely. Trust us to make your travel plans a breeze, and allow yourself to relax and enjoy the journey. Book now and join the thousands of satisfied customers who've made us their go-to travel partner!
            </p>
        </div>

        <div className="available_container">
          <h2>Available Tickets</h2>
        <div className="availables">
            {
              [1,2,3,4,5].map((a, n)=>{
                return(
                  <>
                    <Available key={n}/>
                  </>
                )
              })
            }
            
        </div>
        </div>
        
    </MainContainer>
  )
}

export default Main