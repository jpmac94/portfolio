import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'

import CardFavorite from "../Favorite/CardFavorite";
import Favorite from "../Favorite/Favorite";

describe('cardFavorite', () => {
    test('cardFavorite', async () => {
        const component = render(
            <BrowserRouter>
                <CardFavorite />
            </BrowserRouter>
        )
        const cardFavorite = component.container.querySelector('.cardF')
        expect(cardFavorite).toBeInTheDocument()
    })
    
    test('favorite', async () => {
        const component = render(
            <BrowserRouter>
                <Favorite />
            </BrowserRouter>
        )
        const containerFavorite = component.container.querySelector('.containerFE')
        expect(containerFavorite).toBeInTheDocument()
    })

})