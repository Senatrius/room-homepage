import { useState } from 'react';
import { SliderButtons } from './SliderButtons';

const content = [
  {
    images: {
      mobile: './mobile-image-hero-1.jpg',
      desktop: './desktop-image-hero-1.jpg'
    },
    title: 'Discover innovative ways to decorate',
    paragraph:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
  },
  {
    images: {
      mobile: './mobile-image-hero-2.jpg',
      desktop: './desktop-image-hero-2.jpg'
    },
    title: 'We are available all across the globe',
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    images: {
      mobile: './mobile-image-hero-3.jpg',
      desktop: './desktop-image-hero-3.jpg'
    },
    title: 'Manufactured with the best materials',
    paragraph:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of  experience in this industry, we understand what customers want for their home and office.'
  }
];

export const Hero = () => {
  const [contentIdx, setContentIdx] = useState<number>(0);

  return (
    <main className='flex flex-col md:flex-row'>
      <picture className='max-h-[22.5rem] overflow-hidden md:max-h-[33.375rem] md:basis-[58.5%]'>
        <source
          srcSet={content[contentIdx].images.desktop}
          media='(min-width: 767px)'
        />
        <img
          className='h-full w-full object-cover'
          src={content[contentIdx].images.mobile}
          alt=''
        />
      </picture>
      <div className='relative md:basis-[41.5%]'>
        <div className='mx-auto mt-16 flex max-w-[87%] flex-col pb-20 md:ml-[11.75%] md:mr-12 md:mt-8 md:max-w-[28.5rem] lg:ml-[16.75%] xl:mt-[7.5rem]'>
          <h1 className='mb-4 text-title-m  text-black md:mb-6 md:text-title-d'>
            {content[contentIdx].title}
          </h1>
          <p className='mb-10 text-paragraph text-text md:mb-6'>
            {content[contentIdx].paragraph}
          </p>
          <a
            className='flex items-center whitespace-nowrap text-button'
            href='#'>
            SHOP NOW
            <img
              className='ml-6'
              src='./icon-arrow.svg'
              alt=''
            />
          </a>
        </div>
        <SliderButtons
          prev={() =>
            setContentIdx(
              contentIdx - 1 < 0 ? content.length - 1 : contentIdx - 1
            )
          }
          next={() =>
            setContentIdx(contentIdx + 1 >= content.length ? 0 : contentIdx + 1)
          }
        />
      </div>
    </main>
  );
};
