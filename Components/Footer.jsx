import React from 'react'
import { details } from '../utilities/details'
import { FooterContainer } from './Styled'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { HiLocationMarker, HiPhone } from 'react-icons/hi'

const Footer = () => {
  return (
    <FooterContainer>
        <div className="left">
            <div className="logo">
                GoldFriends
            </div>
            <div className="slogan">
            Your travel and housing goals are within reach. Our team of experts is here to make it happen. Contact us today to start living your best life.    
            </div>
        </div>

        <div className="right">
            {/* <div>Address : {details.address}</div> */}
            <div className='addresses'>
                <h3>Addresses</h3>
                {
                    details.address.map((a, i)=>{
                        return(
                            <p className="address">
                                <HiLocationMarker />
                                {a}
                            </p>
                        )
                    })
                }
            </div>
            <div>Contact <HiPhone /> : 0907823236, 0902236237</div>
            <div className="socials">
                <div>
                    <FaInstagram />
                </div>
                
                <div>
                    <FaFacebook />
                </div>

                <div>
                    <FaTwitter />
                </div>
            </div>
        </div>
    </FooterContainer>
  )
}

export default Footer