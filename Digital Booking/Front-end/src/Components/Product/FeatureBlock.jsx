import React from 'react'
import './../../styles/product/featureBlockStyle.css'

import FeatureListProduct from './FeatureListProduct';

export default function FeatureBlock(props) {
  //  const features = props.features
  props.datosHeader!=undefined &&  console.log(props.datosHeader.features);

    return (
        <>

            <div className='container-feature'>
                <h2>What we offer?</h2>

                <div className='feature-icons'>
                   {/* <div className='features'>**/}
                   <FeatureListProduct datosHeader={props.datosHeader}/>
                   
                    </div>
                    </div>
                </>

                )
}
