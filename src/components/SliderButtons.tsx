export const SliderButtons = ({
  prev,
  next
}: {
  prev: () => void;
  next: () => void;
}) => {
  return (
    <div className='absolute top-0 right-0 z-10 flex -translate-y-full flex-row md:top-auto md:right-auto md:bottom-0 md:left-0 md:translate-y-0'>
      <button
        onClick={prev}
        className='flex h-[14] w-14 items-center justify-center bg-black focus-within:bg-hover hover:bg-hover md:h-[5.5vw] md:w-[5.5vw]'
        aria-label='previous section'>
        <img
          width='14'
          height='24'
          src='./icon-angle-left.svg'
          alt=''
        />
      </button>
      <button
        onClick={next}
        className='flex h-14 w-14 items-center justify-center bg-black focus-within:bg-hover hover:bg-hover md:h-[5.5vw] md:w-[5.5vw]'
        aria-label='next section'>
        <img
          width='14'
          height='24'
          src='./icon-angle-right.svg'
          alt=''
        />
      </button>
    </div>
  );
};
