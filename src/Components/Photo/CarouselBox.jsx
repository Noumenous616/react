import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Flash from './assets/Flash.jpg';
import Flash1 from './assets/Flash1.jpg';

export default class CarouselBox extends Component {
    render () {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    src={ Flash }
                    alt='Flash'
                    />
                    <Carousel.Caption>
                        <h3>FLAAAASH</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, adipisci.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className='d-block w-100'
                    src={ Flash1 }
                    alt='Flash1'
                    />
                    <Carousel.Caption>
                        <h3>FLAAAASH1</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, adipisci.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}