import React from 'react'
import FirstForm from './FirstForm'
import SecondForm from './SecondForm'
import ThirdProduct from './ThirdProduct'

import "../../../styles/formAdmin/containerAdmi.css"
import ForthProduct from './ForthProduct'
import ProductAdmin from './ProductAdmin'
export default function MainCreate() {
  return (
    <div>
      <h2 className='h2Product c h2'>Create a Product</h2>

      <div className='containerTwoBlocks'>

        <div className='containerOfAll'>
          <FirstForm />
          <SecondForm />
          <ThirdProduct />
          <ForthProduct />
        </div>
        <div className='containerodProduct'>
          <ProductAdmin />
        </div>
      </div>
    </div>
  )
}
