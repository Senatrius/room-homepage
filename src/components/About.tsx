export const About = () => {
  return (
    <section className='flex flex-col md:min-h-[34.5vh] md:flex-row'>
      <div className='max-h-[16.625rem] basis-[29.5%] overflow-hidden md:h-auto md:max-h-full'>
        <img
          className='h-full w-full object-cover'
          src='./image-about-dark.jpg'
          alt=''
        />
      </div>

      <div className='basis-[40%]'>
        <div className='mx-auto w-[87%] py-16'>
          <h2 className='mb-3 text-subtitle-m uppercase md:text-subtitle-d'>
            About our furniture
          </h2>
          <p className='text-paragraph text-text'>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </div>
      <div className='max-h-[16.625rem] basis-[30.5%] overflow-hidden md:h-auto md:max-h-full'>
        <img
          className='h-full w-full object-cover'
          src='./image-about-light.jpg'
          alt=''
        />
      </div>
    </section>
  );
};
