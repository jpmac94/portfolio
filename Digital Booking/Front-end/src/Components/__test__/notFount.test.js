import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import React from "react";
import NotFound from '../NotFound/NotFound';

describe('NotFound', () => {
    test('NotFound', async () => {
        const component = render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        const notFound = component.container.querySelector('.scene')
        expect(notFound).toBeInTheDocument()
    })
})