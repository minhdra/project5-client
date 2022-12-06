import { useEffect } from 'react';
import MainFaq from '../components/faq/MainFaq';
import BannerExplore from '../components/shared/banner/BannerExplore';

export default function Faq({setTitle}) {
  useEffect(() => {
    setTitle('Draco - Các Câu Hỏi Thường Gặp');
  }, [setTitle]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BannerExplore title={'Các Câu Hỏi Thường Gặp'} />

      <MainFaq />
    </>
  )
}