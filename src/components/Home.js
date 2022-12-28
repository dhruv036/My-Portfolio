import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";
import Typical from 'react-typical';

export default function Home() {
  return (
    <div>
        <Container>
            
            <TextContainer>
            <Fade>
                <SmallText>
                    Hello, I'm
                </SmallText>
                <BigName>
                    DHRUV SHARMA
                </BigName>
                <Subhead>
                <Typical 
                loop={Infinity}
                steps={
                    [
                        "Creative Software Developer",
                        2000,
                        "Android Developer",
                        1500,
                   ]}
                    />
                </Subhead>
               
                <Discription>
                Passionate Software Developer 🚀 having an experience of building Web 💻 and Mobile applications 📱 with JavaScript / Reactjs / Native Apps and some other cool libraries and frameworks.
                </Discription>
                </Fade>
            </TextContainer>
            <Picture>
                <img src='/images/man-rocket.gif'></img>
            </Picture>
        </Container>
        <Center>
                <Scroll>Scroll</Scroll>              
                <DownArrow src='/images/arrow-down.svg'/>
        </Center>
    </div>
  )
}

const Container = styled.div`
    width: 100%;
    padding-top:20px;
    box-sizing: border-box;
    align-items: center;
    display:flex;
    flex-direction: row;
`
const TextContainer = styled.div`
        width:50%;
        padding-left:50px;
        height: fit-content;
        color: #383838;
`
const SmallText = styled.div`
        font-size:25px;
        margin-top:-10px;
        font-family: 'Montserrat', sans-serif;                      
`
const BigName = styled.div`
        margin-top:5px;
        font-family: 'Montserrat', sans-serif;
        font-size:60px;
        font-weight:900;
        background: linear-gradient(45deg,#A38ED2,#F9C1EB);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
`
 const Subhead = styled.div`
         font-size:20px;
         text-transform: uppercase;
         font-weight:500;
         letter-spacing:1px;
         font-family: 'Montserrat', sans-serif;
`
const Discription = styled.div`
        font-size:20px;
        margin-top:8px;
        font-weight:300;
        font-family: 'Euclid Circular B', sans-serif;
`

const Picture = styled.div`
        width:50%;
      img{
        width:100%;
        background-size: center right;
        height:70vh;
      }
`
 const Scroll = styled.div`
        font-family: 'Euclid Circular B', sans-serif;
        text-transform: uppercase;
        font-weight:500;
        border 2px solid #383838;
        border-radius:20px;
        width:fit-content;
        padding:1px 10px;
        font-size:20px;
        letter-spacing:1px;
 `
 const DownArrow = styled.img`
        margin-top:15px;
        height:30px;
        overflow-x: hidden;
        width:100%;
        animation: animatedown infinite 1.5s;
`
const Center = styled.div`
       width:fit-content;
        margin:auto;
`