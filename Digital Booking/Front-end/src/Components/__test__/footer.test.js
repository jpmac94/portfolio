import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from '../Footer'


describe('footer-test',()=>{

    test('footer-paragraph-test',async ()=>{
    const component=render(<Footer/>)
    const paragraph=component.container.querySelector('p')
    expect(paragraph).toBeInTheDocument()

})

test('footer-paragraph-content',async ()=>{
    const component=render(<Footer/>)
    const paragraph=component.container.querySelector('p')
    expect(paragraph).toHaveTextContent('© 2022 Digital booking')

})

})