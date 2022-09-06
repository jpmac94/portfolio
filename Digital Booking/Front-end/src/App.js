import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import React from 'react'
import ProductMain from './Components/Product/ProductMain'
import MenuHamburguer from './Components/MenuHamburguer/MenuHamburguer';
import Home from './Components/Home';
import MenuLogin from './Components/MenuHamburguer/MenuLogin';
import MenuClose from './Components/MenuHamburguer/MenuClose';
import MenuCreateAccount from './Components/MenuHamburguer/MenuLogin';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import MainByQuery from './Components/Main/MainByQuery/MainByQuery';

import CarouselDesktop from './Components/Product/carousel/CarouselDesktop';
import MapsBlock from './Components/Product/maps/MapsBlock';
import Favorite from './Components/Favorite/Favorite';
import ContextProduct from './Components/Context/ContextProduct'
import NotFound from './Components/NotFound/NotFound'
import Reservation from './Components/Reservation/Reservation';
import Administration from './Components/Administration//CreateProduct/Administration'
import MyReservations from './Components/MyReservation/MyReservations';
import AdminMain from './Components/Administration/adminPage/AdminMain';
import UpdateMain from './Components/Administration/UpdateProduct/UpdateMain';
import DeleteMain from './Components/Administration/DeleteProduct/DeleteMain';
import FormUpdateProduct from './Components/Administration/UpdateProduct/FormUpdateProduct';
function App() {
  return (

    //      {/* <Home/>    */}
    //   {/* <MenuHamburguer/>     */}
    //     {/* <MenuCreateAccount/>    */}
    //       {/* <MenuLogin/>    */}
    //       {/* <MenuClose/>    */}
    /*<>
      <ProductMain/>
       </>*/
    <ContextProduct>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menulogin' element={<MenuLogin />} />
          <Route path='/menuClose' element={<MenuClose />} />
          <Route path='/menuCreateAccount' element={<MenuCreateAccount />} />
          <Route path='/menuHamburguer' element={<MenuHamburguer />} />
          <Route path='/singUp' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/redirect' element={<Navigate to='/' />} />
          <Route path='/productMain' element={<ProductMain />} />
          <Route path='/carousel' element={<CarouselDesktop />} />
          <Route path="/category/:id/:title" element={<MainByQuery/>}/>
          <Route path='/product/:id/:name'element={<ProductMain/>}/>
          <Route path='/product/:id/:name'element={<Navigate to='/product/:id/:name'/>}/>
          <Route path='/productsByCity/:nameCity' element={<MainByQuery/>}/>
          <Route path='/productsByCity/:nameCity' element={<Navigate to={'/productsByCity/:nameCity'}/>}/>
          <Route path='/maps/:state/:city/:country' element={<MapsBlock/>}/>
          {/* <Route path='/maps/:state/:city/:country' element={<Navigate to={'/maps/:state/:city/:country'}/>}/> */}
          <Route path='/favorite' element={<Favorite/>}/>

          <Route path='/administrationMain' element={<AdminMain/>}/>
          <Route path='/createProduct' element={<Administration/>}/>
          <Route path='/updateProduct' element={<UpdateMain/>}/>
          <Route path='/formUpdateProduct' element={<FormUpdateProduct/>}/>
          <Route path='/deleteProduct' element={<DeleteMain/>}/>

          <Route path='/product/:id/:name/reservation' element={<Reservation/>}/>
          <Route path='/myreservation' element={<MyReservations/>}/>



          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ContextProduct>
  );
}

export default App;
