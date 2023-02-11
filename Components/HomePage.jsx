import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { Banner } from './Styled'
import Typewriter from "typewriter-effect"
import Main from './Main'

const HomePage = () => {
  return (
    <>
        <Nav />
        <Banner>
        <div className="text">
          <h3>
            Gold <span className="gold">Friends</span> - Travels & Tours
          </h3>
          <Typewriter
            delay={1100}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Streamline your travel plans with ease by letting us handle your visa processing and ticket booking all in one convenient process!"
                )
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .start();
            }}
          />
          <div className="getStarted">Get Started</div>
        </div>

        {/* <img
          src="https://images.theconversation.com/files/179208/original/file-20170721-28483-1k8sy5q.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
          alt="banner text"
        /> */}
      </Banner>
      <Main />
        <Footer />
    </>
  )
}

export default HomePage