import React, { useEffect, useState } from 'react'
import DescriptionBlock from './DescriptionBlock'
import HeaderBlock from './HeaderBlock'
import Ubication from './Ubication'
import FeatureBlock from './FeatureBlock'
import PolicyBlock from './PolicyBlock'
import Header from '../Header/Header'
import Footer from '../Footer'
import DatesContainer from './DatesContainer'
import CarouselBlock from './carousel/CarouselBlock'
import { useParams } from 'react-router-dom'
import MapsBlock from './maps/MapsBlock'

export default function ProductMain() {
  const { id } = useParams();

  const [ubiP, setUbiP] = useState(null)
  // console.log(id);
  useEffect(() => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/product/findById/" + id, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setUbiP(result);

      })
      .catch(error => console.log('error', error));

  }, [id])
  // console.log(id);

  // console.log(product.city.name);
  // console.log(product.city.state.country.name);
  return (
    <>
      <Header />
      <HeaderBlock datosHeader={ubiP} />
      <Ubication datosHeader={ubiP} />
      <CarouselBlock datosHeader={ubiP} />
      <DescriptionBlock datosHeader={ubiP} />
      <FeatureBlock datosHeader={ubiP} />
      <DatesContainer datosHeader={ubiP} />
      <div className='hola'>
        <MapsBlock datosHeader={ubiP} />
      </div>

          <PolicyBlock datosHeader={ubiP}/>
          <Footer />
      
    </>

  )
}
