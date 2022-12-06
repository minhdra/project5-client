import { Link } from 'react-router-dom';

export default function MainBrand({ brands }) {
  return (
    <>
      {brands ? (
        <>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 xl:gap-6'>
            {brands.map(item => (
              <Link
                key={item._id}
                className='flex items-center px-5 lg:px-6 rounded-md shadow-vendorCard cursor-pointer relative bg-white transition-all hover:shadow-vendorCardHover py-5 lg:py-6'
                to={'/brands/' + item.path}
              >
                <span className='text-[10px] xl:text-xs font-semibold text-white uppercase px-2 py-1 xl:py-[5px] rounded bg-[#2B78C6] absolute top-2 end-2'>
                  Mới
                </span>
                <div className='border border-gray-100 relative flex flex-shrink-0 items-center justify-center bg-gray-300 rounded-full overflow-hidden w-16 h-16'>
                  <span>
                    <img
                      alt='text-logo'
                      sizes='100vw'
                      srcSet={item.thumbnail}
                      decoding='async'
                      data-nimg='fill'
                    />
                  </span>
                </div>
                <div className='flex flex-col ms-4'>
                  <h4 className='text-heading font-semibold text-sm sm:leading-6 leading-7 md:text-base xl:text-lg mb-0.5'>
                    {item.brand_name}
                  </h4>
                  <p className='text-[13px] leading-5 flex items-start truncate'>
                    <span className='inline-block me-1 text-[#6B7280] relative top-1'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 384 512'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'></path>
                      </svg>
                    </span>
                    <span dangerouslySetInnerHTML={{__html: item.description}}></span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
