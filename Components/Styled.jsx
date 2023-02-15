import styled from "styled-components";

export const Container = styled.div`
  
  padding: ${({ padding }) => padding || "0px"};
  margin: ${({ margin }) => margin || "0px"};
  width: ${({ width }) => width || "100%"};
`;

export const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 10px auto;
  align-items: center;
  /* justify-items: center; */
  gap: 100px;
  padding: 20px 0;
  position: absolute  ;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.09); */

  @media (max-width: 700px){
    justify-content: space-between;
    padding: 20px;

    img{
      width: 60px;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }

  .logo {
    color: #b18641;
    font-size: 30px;
    font-weight: bold;

    img{
      width: 200px;
    }
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #fff;
    font-size: 16px;

    a {
      padding: 5px 0px;
      cursor: pointer;
    }

    div.active {
      /* color: white;
            background-color: #b18641; */
      /* border-radius: 14px; */
      border-bottom: 1px solid;
      color: #b18641;
    }
  }

  #services {
    position: relative;
    cursor: pointer;

    .navServices {
      position: absolute;
      top: 30px;
      left: 0;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
      background-color: #fff;
      width: 260%;
      transition: all 0.3s;
      border-radius: 6px;
      /* font-size: 14px; */

      a {
        padding: 10px;
        cursor: pointer;
        display: block;
        color: black;
      }

      a:hover {
        background-color: rgba(200, 200, 200, 0.2);
      }
    }
  }

  .signUp {
    background-color: #b18641;
    color: white;
    border-radius: 4px;
    font-size: 12px;
    padding: 10px 20px;
    cursor: pointer;
  }

  .hamburger{
    display: none;
  }

  @media (max-width:700px) {
    #services{
      .navServices{
        position: static;
        top: 0;
        background-color: #fff;
        box-shadow: none;
      }
    }
    
    gap: 0;
      .center{
        display: none;
      }
/* 
      .signUp{
        display: none;
      } */
      
      .hamburger{
        display: block;

        .icon{
          color: white;
        }

        .cancel{
          display: flex;
          align-items: flex-end;
          justify-content: end;
        }

        .items{
          position: absolute;
          right: 0;
          top: 0;
          height: 100vh;
          color: black;
          background-color: white;
          padding: 20px 10px;
          width: 60%;
          display: flex;
          flex-direction: column;
          gap: 20px;

          a{
            color: black;
          }
        }
      }
    }
`;

export const Banner = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  align-items: center;
  gap: 100px;
  width: 100%;
  padding: 0 10%;
  height: 100vh;
  margin: 0px auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(-45deg,rgba(0,0,0,0.7), rgb(0,0,0,1)), url("https://images.unsplash.com/photo-1525396524423-64f7b55f5b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80");

  .text {
    color: white;
    h3 {
      font-size: 3.5rem;
      padding: 10px 0px;
      font-weight: bolder;
      width: 70%;
    }

    p {
      line-height: 1.5;
      width: 70%;
    }
  }

  img {
    width: 100%;
    height: 80%;
    border-radius: 25px;
    box-shadow: 0 6px 40px rgba(0, 0, 0, 0.2);
    /* border: 10px solid white; */
  }

  .getStarted{
    background-color: #b18641;
    color: black;
    padding: 10px 20px;
    width: fit-content;
    margin: 10px 0;
    border-radius: 26px;
    font-weight: 900;
    cursor: pointer;
  }

  @media screen and (max-width:700px){

    .text{
      h3{
        width: 100%;
        font-size: 30px;
      }

      p{
        width: 100%;
      }
    }
    
  }
`

export const FooterContainer = styled.div`
  display: grid;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #000;
  padding: 80px;
  color: white;
  grid-template-columns: 1fr 1fr;

  .addresses{
    display: grid;
    gap: 10px;
  }

  .left {
    .logo {
      font-size: 40px;
      font-weight: 900;
      padding: 0 0 10px 0;
      color: #b18641;
    }

    .slogan {
      width: 80%;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .socials {
      display: flex;
      flex-direction: row;
      gap: 10px;
      color: #b18641;
      font-size: 20px;

      div {
        border: 2px solid #b18641;
        padding: 10px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: none;
    padding: 30px;
    gap: 30px;
  }
`;

export const MainContainer = styled.div`
    width: 80%;
    margin: 100px auto;

    .why{
        
        h2{
            text-align: center;
            padding: 20px 0;
        }

        p{
            line-height: 1.5;
        }
    }

    .availables{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      padding: 30px 0;

      @media (max-width: 700px){
        grid-template-columns: none;
      }
    }

    .available_container{
      margin: 100px 0;

      h2{
        text-align: center;
      }
    }
`

export const AvailableContainer = styled.div`
  padding: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.10);
  border-radius: 20px;
  cursor: pointer;

    .top{
      display: flex;
      gap: 10px;
      align-items: center;

      img{
        width: 50px;
        height: 50px;
        clip-path: circle();
      }
    }

    p{
      padding: 10px 0;
    }
`