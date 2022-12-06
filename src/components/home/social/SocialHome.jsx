export default function SocialHome() {
  return (
    <>
      <div className='my-8 md:my-12 lg:my-16 xl:my-20 3xl:my-24 pb-5 lg:pb-3.5 2xl:pb-5 pt-3 lg:pt-1.5 2xl:pt-2 3xl:pt-3 text-center'>
        <div className='max-w-md mx-auto mb-4 md:mb-5 xl:mb-8 2xl:mb-10 3xl:mb-12'>
          <h3 className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-2 md:mb-3 lg:mb-3.5'>
            Trò Chuyện Với Chúng Tôi
          </h3>
          <p className='text-body text-xs md:text-sm leading-6 md:leading-7'>
            Bạn đang gặp khó khăn? Có nghi vấn? Cần gợi ý? Chúng tôi luôn sẵn
            sàng giúp đỡ. Gửi tin nhắn tới chúng tôi.
          </p>
        </div>
        <div className='mb-2.5 md:mb-2 xl:mb-2 2xl:mb-4 3xl:mb-6 md:px-20 lg:px-40 xl:px-0'>
          <span className='box-border inline-block overflow-hidden opacity-100 m-0 p-0 relative max-w-full'>
            <span className='box-border block opacity-100 m-0 p-2 w-[250px] h-[250px] rounded-full bg-slate-200'>
              <img
                alt=''
                aria-hidden='true'
                src={require('../../../assets/images/others/chat.jpg')}
                className='block max-w-full h-full object-cover opacity-100 m-0 p-0 rounded-full'
              />
            </span>
          </span>
        </div>
        <a
          data-variant='flat'
          className='text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart'
          href={'https://facebook.com/leminh0111'}
          target={'_blank'}
          rel='noreferrer'
        >
          Trò chuyện với chúng tôi
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 512 512'
            className='ms-2 text-lg md:text-xl'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='none'
              strokeLinecap='round'
              strokeMiterlimit='10'
              strokeWidth='32'
              d='M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.64 139.09 140.72 48 255.82 48 356.2 48 440 117.54 459.57 209.85a199 199 0 014.43 41.64c0 112.41-89.49 204.93-204.59 204.93-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 00-11.13-2.07 30.7 30.7 0 00-12.08 2.43L81.5 462.78a15.92 15.92 0 01-4.66 1.22 9.61 9.61 0 01-9.58-9.74 15.85 15.85 0 01.6-3.29z'
            ></path>
            <circle cx='160' cy='256' r='32'></circle>
            <circle cx='256' cy='256' r='32'></circle>
            <circle cx='352' cy='256' r='32'></circle>
          </svg>
        </a>
      </div>

      <div className='flex justify-center item-center gap-0.5 sm:gap-1 overflow-hidden rounded-md text-center'>
        <a
          className='group flex justify-center text-center relative w-1/3 md:w-1/6 rounded overflow-hidden'
          href='https://www.instagram.com/minhdra0111/'
          target='_blank'
          rel='noreferrer'
        >
          <span className='box-border inline-block overflow-hidden opacity-100 m-0 p-0 relative max-w-full'>
            <span className='box-border block opacity-100 m-0 p-0 max-w-full'>
              <img
                alt=''
                aria-hidden='true'
                src={require('../../../assets/images/others/instagram-avatar.jpg')}
                className='block max-w-full opacity-100 m-0 p-0'
              />
            </span>
          </span>
          <div className='absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-50'></div>
          <div className='absolute top left h-full w-full flex items-center justify-center'>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 448 512'
              className='text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
            </svg>
          </div>
        </a>
      </div>
    </>
  );
}
