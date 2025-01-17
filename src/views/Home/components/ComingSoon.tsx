import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Heading, Text, Button, Image, Card } from '@pancakeswap/uikit'
import styled from 'styled-components'


const SlideImg = styled.img`
    width: 400px;
    height: 200px;
    ${({ theme }) => theme.mediaQueries.xs} {
        width: 400px;
        height: 200px;
    }

    ${({ theme }) => theme.mediaQueries.md} {
        width: 400px;
        height: 200px;
    }

    ${({ theme }) => theme.mediaQueries.lg} {
        width: 600px;
        height: 200px;
    }

`


const ComingSoon = () => {

    return (
        <Carousel 
        autoPlay
        interval={2000}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        width='100'        
        >
            <div>
                <SlideImg src="/images/adverts/pools-coming-soon-big.svg" alt='Pools coming soon'/>
            </div>
            <div>
                <SlideImg src="/images/adverts/farms-coming-soon-big.svg" alt='Farms coming soon'/>
            </div>
            
        </Carousel>
    
    )
}

export default ComingSoon