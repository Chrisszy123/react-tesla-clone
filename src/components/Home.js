import React from 'react';
import styled from 'styled-components'
import Section from './Section';
import Header from './Header';
//import image from '../../public/images/model-x.jpg'

function Home() {
  return (
    <Container>
        <Header />
        <Section
            title = "Model-X"
            description = " Get the Amazing Tesla Model X"
            image = "model-s.jpg "
            leftButtonText = "Custom Order" 
            rightButtonText = "Existing Inventory"
        />
        <Section 
            title = "Model-X"
            description = " Get the Amazing Tesla Model S"
            image = "model-x.jpg"
            leftButtonText = "Custom Order" 
            rightButtonText = "Existing Inventory"
        />
        <Section
            title = "Model-3"
            description = " Get the Amazing Tesla Model 3"
            image = "model-y.jpg"
            leftButtonText = "Custom Order" 
            rightButtonText = "Existing Inventory"
        />
        <Section
            title = "Model-Y"
            description = " Get the Amazing Tesla Model Y"
            image = "model-3.jpg"
            leftButtonText = "Custom Order" 
            rightButtonText = "Existing Inventory"
        />
        <Section 
            title = "Lowest Cost Solar Panels"
            description = " Money Back Gurantee"
            image = "solar-panel.jpg"
            leftButtonText = "Order Now!" 
            rightButtonText = "Learn More"
        />
        <Section 
            title = "Solar Roofs "
            description = " 24hrs Power Guranteed"
            image = "solar-roof.jpg"
            leftButtonText = "Order Now!" 
            rightButtonText = "Learn More"
        />
        <Section 
            title = "Accessories"
            description = ""
            image = "accessories.jpg"
            leftButtonText = "Shop Now!" 
        />
    </Container>
  );
}

export default Home;

const Container = styled.div`
    height: 100vh;
`
