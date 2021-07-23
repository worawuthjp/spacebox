import Head from 'next/head';
import IndexStyle from './index/styled';
import { Layout, CarouselShow } from 'components';
import { useState } from 'react';

export default function Home() {
  //const [imgSrc,setImgSrc]
  const [imgSrc] = useState([
    { src: 'images/home/Life Asok Rama 9.jpg', message: 'xxxxxxxxxxxxxxxxxxxxxxxxx' },
    { src: 'images/home/A5.jpg', message: 'xxxxxxxxxxxxxxxxxxxxxxxxx' },
    { src: 'images/home/B3.jpg', message: 'xxxxxxxxxxxxxxxxxxxxxxxxx' },
    { src: 'images/home/C9.jpg', message: 'xxxxxxxxxxxxxxxxxxxxxxxxx' },
    { src: 'images/home/F3.jpg', message: 'xxxxxxxxxxxxxxxxxxxxxxxxx' },
  ]);

  const [adsImg] = useState([
    {
      src: 'images/MODERN_EAST_TONE.jpg',
    },
  ]);
  return (
    <IndexStyle>
      <Head>
        <title>space box</title>
      </Head>

      <Layout>
        <div className="mt-2">
          <h2>New Collections</h2>
          <CarouselShow imgSrc={adsImg} showThumbs={false} imgStyle={{ height: 'auto' }} />
        </div>
        <div className="mt-4">
          <h2>Product</h2>
          <CarouselShow
            showThumbs={false}
            imgSrc={imgSrc}
            showArrows={true}
            interval={5}
            autoPlay={false}
            centerMode={true}
            imgStyle={{ width: '500px', height: 'auto' }}
          />
        </div>
      </Layout>
    </IndexStyle>
  );
}
