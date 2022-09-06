import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import React from "react";
import BlockSearch from '../Main/BlockSearch/BlockSearch'
import ButtonSearch from '../Main/BlockSearch/ButtonSearch'
import Calendario from '../Main/BlockSearch/Calendario'
import SelectorCity from '../Main/BlockSearch/SelectorCity'
import Opcion from '../Main/BlockSearch/Opcion'

describe('headerBlock', () => {
    test('blockSearch', async () => {
        const component = render(
            <BrowserRouter>
                <BlockSearch />
            </BrowserRouter>
         
        )
        const blockSearch = component.container.querySelector('.blockSearch')
        expect(blockSearch).toBeInTheDocument()
    })

    /*Test para ButtonSearch*/
    test('buttonSearch', async () => {
        const component = render(
            <BrowserRouter>
                <ButtonSearch />
            </BrowserRouter>
        )
        const buttonSearch = component.container.querySelector('.container-search')
        expect(buttonSearch).toBeInTheDocument()
    })

    /*Test para Calendario*/
    test('calendar', async () => {
        const component = render(
            <BrowserRouter>
                <Calendario />
            </BrowserRouter>
        )
        const calendar = component.container.querySelector('.container-calendar')
        expect(calendar).toBeInTheDocument()
    })

    /*Test para SelectorCity*/
    test('selectorCity', async () => {
        const component = render(
            <BrowserRouter>
                <SelectorCity />
            </BrowserRouter>
        )
        const selectorCity = component.container.querySelector('.container-city')
        expect(selectorCity).toBeInTheDocument()
    })

    test('OPCION', async () => {
        const component = render(
            <BrowserRouter>
                <Opcion />
            </BrowserRouter>
        )
        const opcion = component.container.querySelector('#opcion')
        expect(opcion).toBeInTheDocument()
    })
})