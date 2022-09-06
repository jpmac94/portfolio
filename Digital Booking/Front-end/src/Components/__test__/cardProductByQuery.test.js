import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import CardProductByQuery from '../Main/CardProductsByQuery/CardProductByQuery'
import ListProductByQuery from '../Main/CardProductsByQuery/ListProductByQuery'
import React from "react";

/*Test para CardByQuery*/
describe('CardByQuery', () => {
    test('classCard', async () => {
        const component = render(
            <BrowserRouter>
                <CardProductByQuery />
            </BrowserRouter>
        )
        const classCard= component.container.querySelector('.card')
        expect(classCard).toBeInTheDocument()
    })

    test('classContainer', async () => {
        const component = render(
            <BrowserRouter>
                <ListProductByQuery />
            </BrowserRouter>
        )
        const classContainer= component.container.querySelector('.container-recommendation')
        expect(classContainer).toBeInTheDocument()
    })


})    


