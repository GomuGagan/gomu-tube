import React from 'react'
import styled from 'styled-components'
import GomuTube from "../img/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import {Link} from "react-router-dom";


const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper=styled.div`
    padding:18px 26px;
    height: 100%;
`
const Logo =styled.div`
    display:flex;
    align-items:center;
    gap:5px;
    font-weight:bold;
    margin-bottom: 25px;

`
const Img=styled.img`
    height: 25px;

`
const Item=styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    cursor:pointer;
    padding:7.5px 0;
`
const Hr=styled.hr`
margin:15px 0;
border:0.5px solid ${({ theme }) => theme.soft};
`
const Login=styled.div`

`
const Button=styled.button`
padding: 5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color: #3ea6ff;
border-radius:3px;
font-weight: 500;
margin-top: 10px;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;

`
const Title=styled.h2`
font-size: 14px;
font-weight: 500;
color:#aaaaaa;
margin-bottom: 20px;
`

const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
            <Logo>
                <Img src={GomuTube}/>
                GomuTube
            </Logo>
            </Link>
            <Item>
                <HomeIcon/>
                Home
            </Item>
            <Item>
                <ExploreOutlinedIcon/>
                Explore
            </Item>
            <Item>
                <SubscriptionsOutlinedIcon/>
                Subscriptions
            </Item>
            <Hr/>
            <Item>
                <HomeIcon/>
                Library
            </Item>
            <Item>
                <HomeIcon/>
                History
            </Item>
            <Hr/>
            <Login>
                Sign in to like videos, comment, and subscribe.
                <Button>
                    <AccountCircleOutlinedIcon/>
                    SIGN IN
                    </Button>
            </Login>
            <Hr/>
            <Title>
                BEST OF GOMUTUBE
            </Title>
            <Item>
                <HomeIcon/>
                Music
            </Item>
            <Item>
                <HomeIcon/>
                Sports
            </Item>
            <Item>
                <HomeIcon/>
                Gaming
            </Item>
            <Item>
                <HomeIcon/>
                Movies
            </Item>
            <Item>
                <HomeIcon/>
                News
            </Item>
            <Item>
                <HomeIcon/>
                Live
            </Item>
            <Hr/>
            <Item>
                <HomeIcon/>
                Settings
            </Item>
            <Item>
                <HomeIcon/>
                Report
            </Item>
            <Item>
                <HomeIcon/>
                Help
            </Item>
            <Item onClick={()=>setDarkMode(!darkMode)}>
                <HomeIcon/>
               {darkMode ? "Light" : "Dark"} Mode
            </Item>
        </Wrapper>
        </Container>
  )
}

export default Menu;