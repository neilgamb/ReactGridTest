import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

export default class ComponentA extends Component {
    render() {

        var settings = {
            dots: true,
            adaptiveHeight: true,
            // infinite: true,
            dots: false,
            speed: 500,
            slidesToShow: 1,
            accessibility: true,
            slidesToScroll: 1,
            // responsive: [
            //     { breakpoint: 480, settings: { slidesToShow: 1 } },
            //     { breakpoint: 764, settings: { slidesToShow: 2 } },
            //     { breakpoint: 1024, settings: { slidesToShow: 3 } },
            // ]
        };
        return (
            <div className="slider-wrapper">
                <Slider { ...settings }>
                    <div><img src="https://i.pinimg.com/736x/2e/8d/0c/2e8d0c42d2c7c7169424d740bd2294b9--red-heads-my-boys.jpg" alt="" /></div>
                    <div><img src="https://i.pinimg.com/736x/5e/0b/09/5e0b0975b0c9b75ea337795a380927ea--doggie-pool-video-x.jpg" alt="" /></div>
                    <div><img src="https://www.dogalize.com/wp-content/uploads/2017/03/welsh-corgi-1581119_640-200x200.jpg" alt="" /></div>
                    <div><img src="http://usercontent.packdog.com/avatar/38fc5ef50202a0ed80c92732c51d3ca9d5b00a6c_200.jpg" alt="" /></div>
                    <div><img src="http://cdn-www.dailypuppy.com/dog-images/miles-the-pembroke-welsh-corgi_65744_2015-05-08_w200.jpg" alt="" /></div>
                    {/* <div><img src="" alt="" /></div> */}
                </Slider>
            </div>
        );
    }
}

