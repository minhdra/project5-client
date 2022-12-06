import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './assets/css/app.css';

// Layouts
import ClientLayout from './layouts/Client';
import Brand from './pages/Brand';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import DetailProduct from './pages/DetailProduct';
import Faq from './pages/Faq';
import Home from './pages/Home';
import PaymentReturn from './pages/PaymentReturn';
import Privacy from './pages/Privacy';
import Products from './pages/Products';
import Page404 from './pages/shared/404';
import Verify from './pages/Verify';

function App() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* add routes with layouts */}
          <Route element={<ClientLayout />}>
            <Route index path='/' element={<Home setTitle={setTitle} />} />
            <Route path='/collections/:slug' element={<Collection setTitle={setTitle} />} />
            <Route path='/category/:slug' element={<Category setTitle={setTitle} />} />
            <Route path='/products' element={<Products setTitle={setTitle} />} />
            <Route path='/products/:slug' element={<DetailProduct setTitle={setTitle} />} />
            <Route path='/account/verify' element={<Verify setTitle={setTitle} />} />
            <Route path='/checkout' element={<Checkout setTitle={setTitle} />} />
            <Route path='/payment/payment-return' element={<PaymentReturn setTitle={setTitle} />} />
            <Route path='/brands' element={<Brand setTitle={setTitle} />} />
            <Route path='/pages/contact-us' element={<Contact setTitle={setTitle} />} />
            <Route path='/pages/faq' element={<Faq setTitle={setTitle} />} />
            <Route path='/pages/privacy' element={<Privacy setTitle={setTitle} />} />
            <Route path='/pages/terms' element={<Privacy setTitle={setTitle} />} />
            <Route
              path='/not-found'
              element={<Page404 setTitle={setTitle} />}
            />
          </Route>

          <Route path='*' element={<Navigate to='/not-found' replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
