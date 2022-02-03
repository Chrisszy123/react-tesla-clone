import React, { useState } from 'react';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/cars/carSlice';
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom"

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);

  return (
      <Container>
          <Link to='/'>
              <img src='/images/logo.svg' alt='logo' />
            </Link>
          <Menu>
              {cars && cars.map((car, i) => (
                  <Link key={i} to='/'>{car}</Link>
              ))}
          </Menu>
          <RightMenu>
              <RightMainMenu>
                <Link to="/shop">Shop</Link>
                <Link to="/login">Tesla Account</Link>
              </RightMainMenu>
              
              <CustomMenu onClick={() => setBurgerStatus(true)}>

              </CustomMenu>
          </RightMenu>
          <BurgerNav show={burgerStatus}>
              <CloseWrapper>
                <CustomClose onClick={() => setBurgerStatus(false)}/>
              </CloseWrapper>
              <li><a href='#'>Existing Inventory</a></li>
              <li><a href='#'>Used Inventory</a></li>
              <li><a href='#'>Trade In </a></li>
              <li><a href='#'>Cyber Truck</a></li>
              <li><a href='#'>Road Master</a></li>
              <li><a href='#'>Existing Inventory</a></li>
              <li><a href='#'>Existing Inventory</a></li>
              <li><a href='#'>Used Inventory</a></li>
              <li><a href='#'>Trade In </a></li>
              <li><a href='#'>Cyber Truck</a></li>
              <li><a href='#'>Road Master</a></li>
              <li><a href='#'>Existing Inventory</a></li>
              
          </BurgerNav>
      </Container>
  )
}

export default Header;

const Container = styled.div `
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;  
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
        color:black;
    }
    @media(max-width: 760px) {
        display:none;
    }
`
const RightMenu = styled.div `
    display: flex;

    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        color: black;
    }
`
const RightMainMenu = styled.div`
    @media(max-width: 760px) {
        display:none;
    }
`
const CustomMenu = styled(MenuIcon) `
    cursor: pointer
`
const BurgerNav = styled.div `
    position: fixed;
    z-index: 16;
    top: 0;
    bottom: 0;
    right: 0;
    background:  white;
    width: 300px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in;
    li{
        padding: 15px 0px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        a{
            font-weight: 600;
            color: black;
        }
    }
`
const CustomClose = styled(CloseIcon) `
    cursor: pointer;

`
const CloseWrapper = styled.div`
    display:  flex;
    justify-content: end;

`