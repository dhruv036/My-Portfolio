import React from 'react'
import styled from 'styled-components';


export default function Header() {
  return (
    <div>
        <Container>
            <Logo><img src="/four_squares.png"  alt=""/></Logo>
            <Menu>
              <ul>
                <li>Skills</li>
                <li>Work Experience</li>
                <li>Education</li>
                <li>Projects</li>
              </ul>
            </Menu>
        </Container>
    </div>
  )
}
const Container = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
`

const Logo = styled.div`
    padding: 10px 15px;
`

const Menu = styled.div`
    ul{
        
        display: flex;
        flex-direction: row;
    }
    li{
        padding: 15px 25px;
        font: inherit;
        list-style: none;
        font-family: 'Euclid Circular B', sans-serif;
        font-weight: 500;
        cursor:pointer;
        color: #27374c;
        letter-spacing: -.45px;
        font-size:16px;
    }
`
