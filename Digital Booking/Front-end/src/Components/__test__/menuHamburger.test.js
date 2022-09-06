import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import React from "react";
import MenuClose from '../MenuHamburguer/MenuClose'
import MenuHamburguer from '../MenuHamburguer/MenuHamburguer'
import MenuCreateAccount from '../MenuHamburguer/MenuCreateAccount'


/*Test para MenuHamburger*/
describe('menuHamburger', () => {
    test('menuClose', async () => {
        const view = render(
            <BrowserRouter>
                <MenuClose />
            </BrowserRouter>
        )
        const headerMenu = view.screen.getByRole('.headerMenu')
        expect(headerMenu).toBeInTheDocument()
    })

    test('menuHammburger', async () => {
        const view = render(
            <BrowserRouter>
                <MenuHamburguer />
            </BrowserRouter>
        )
        const logos = view.screen.getByRole('.network-logos')
        expect(logos).toBeInTheDocument()
    })

    test('menuCreateAccount', async () => {
        const view = render(
            <BrowserRouter>
                <MenuCreateAccount />
            </BrowserRouter>
        )
        const menuButton = view.screen.getByRole('.menuButtons')
        expect(menuButton).toBeInTheDocument()
    })
})