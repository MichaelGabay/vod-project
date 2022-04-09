import React from 'react'
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaInfoCircle } from 'react-icons/fa'


export default function CarouselVod() {
    let nav = useNavigate();
    return (
        <>
            <React.Fragment>
                <Carousel interval={2000} fade>
                    <Carousel.Item className='carousleDiv' style={{ backgroundPosition: 'top', backgroundImage: 'url(https://www.somagnews.com/wp-content/uploads/2020/03/dwayne-johnson-hizli-ve-ofkeli-hobbs-and-shaw-2-filmi-ile-ilgili-aciklama-yapti-e1585697963149.jpg)' }}>
                        <Carousel.Caption className='text-start'>
                            <button onClick={() => {
                                nav('/video/tt6806448')
                            }} className='btn btn-warning'>More Information <FaInfoCircle className='ms-2' /></button>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousleDiv' style={{ backgroundPosition: 'top', backgroundImage: 'url(https://titanicsound.files.wordpress.com/2014/11/titanic_movie-hd-1.jpg)' }}>
                        <Carousel.Caption className='text-start'>
                            <button onClick={() => {
                                nav('/video/tt0120338')
                            }} className='btn btn-warning'>More Information <FaInfoCircle className='ms-2' /></button>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousleDiv' style={{ backgroundPosition: 'top', backgroundImage: 'url(https://m.media-amazon.com/images/M/MV5BZWVhYzE0NzgtM2U1Yi00OWM1LWJlZTUtZmNkNWZhM2VkMDczXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg)' }}>

                        <Carousel.Caption className='text-start'>
                            <button onClick={() => {
                                nav('/video/tt0451279')
                            }} className='btn btn-warning'>More Information <FaInfoCircle className='ms-2' /></button>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </React.Fragment>
        </>
    )
}
