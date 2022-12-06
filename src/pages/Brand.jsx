import { useState } from 'react';
import { useEffect } from 'react';
import HeaderBrand from '../components/brand/HeaderBrand';
import MainBrand from '../components/brand/MainBrand';
import { search as searchBrands } from '../services/brand';

export default function Brand({ setTitle }) {
  useEffect(() => {
    setTitle(
      'Draco - Danh Sách Thương Hiệu '
    );
  }, [setTitle]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [brands, setBrands] = useState();

  useEffect(() => {
    searchBrands().then(res => setBrands(res));
  }, []);

  return (
    <>
      <div className='border-t border-gray-300 pt-10 lg:pt-12 xl:pt-14 pb-14 lg:pb-16 xl:pb-20 px-4 md:px-8'>
        <div className='w-full xl:max-w-[1170px] mx-auto'>
          <HeaderBrand />
          <MainBrand brands={brands} />
        </div>
      </div>
    </>
  );
}
