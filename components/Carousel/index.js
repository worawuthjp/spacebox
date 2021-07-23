import React from 'react';
import _ from 'lodash';
import { CarouselStyle } from './styled';
import { Image } from 'components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselShow({ imgSrc, imgStyle, ...props }) {
  return (
    <CarouselStyle>
      <Carousel {...props}>
        {/* img => [{src:'', message: ''}] */}
        {_.map(imgSrc, (i, index) => {
          return (
            <div key={index}>
              <Image src={i.src} alt="" style={imgStyle} />
              {i.message && <p className="legend">{i.message}</p>}
            </div>
          );
        })}
      </Carousel>
    </CarouselStyle>
  );
}
