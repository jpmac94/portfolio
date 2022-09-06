import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import React from "react";
/*Test para Home*/
describe('singUp', () => {

    /*Test para home*/
    test('home', async () => {
        const component = render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        const header = component.container.querySelector('Header')
        expect(header).toBeInTheDocument()
    })

})