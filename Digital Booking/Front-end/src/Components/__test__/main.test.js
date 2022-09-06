import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from "react";
import { BrowserRouter } from 'react-router-dom'

import Main from '../Main/Main'
import List from '../Main/Card/List';
import CardRecomendation from '../Main/CardRecomendation/CardRecomendation'
import Pagination from '../Main/CardRecomendation/Pagination'
import RatingCard from '../Main/RatingCard/RatingCard'
import MainByQuery from '../Main/MainByQuery/MainByQuery'
import Card from '../Main/Card/Card';
import DefaultValue from '../Main/BlockSearch/DefaultValue';
import SelectorCity from '../Main/BlockSearch/SelectorCity'

/*Test para Main*/
describe('main-test', () => {

    test('main', async () => {
        const view = render(
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        )
        const main = view.view.getByRole('main')
        expect(main).toBeInTheDocument()

    })

    test('list', async () => {
        const view = render(
            <BrowserRouter>
                <List />
            </BrowserRouter>
        )
        const list = view.screen.getByRole('.contenedor-list')
        expect(list).toBeInTheDocument()

    })

    test('cardRecomendation', async () => {
        const view = render(
            <BrowserRouter>
                <CardRecomendation />
            </BrowserRouter>
        )
        const classCard = view.view.getByRole('.card')
        expect(classCard).toBeInTheDocument()

    })

    test('pagination', async () => {
        const view = render(
            <BrowserRouter>
                <Pagination />
            </BrowserRouter>
        )
        const pagination = view.view.getByRole('.container-paginacion')
        expect(pagination).toBeInTheDocument()

    })

    
    test('rating', async () => {
        const view = render(
            <BrowserRouter>
                <RatingCard />
            </BrowserRouter>
        )
        const rating = view.screen.getByRole('.puntuacion')
        expect(rating).toBeInTheDocument()

    })

    test('mainByQuery', async () => {
        const view = render(
            <BrowserRouter>
                <MainByQuery />
            </BrowserRouter>
        )
        const headerMainByQuery = view.screen.getByRole('Header')
        expect(headerMainByQuery).toBeInTheDocument()

    })

    
    test('card', async () => {
        const view = render(
            <BrowserRouter>
                <Card />
            </BrowserRouter>
        )
        const propertyCard = view.screen.getByRole('.property-card')
        expect(propertyCard).toBeInTheDocument()

    })

    test('default', async () => {
        const view = render(
            <BrowserRouter>
                <DefaultValue />
            </BrowserRouter>
        )
        const containerDefault = view.screen.getByRole('#container-default-value')
        expect(containerDefault).toBeInTheDocument()

    })
    test('city', async () => {
        const view = render(
            <BrowserRouter>
                <SelectorCity />
            </BrowserRouter>
        )
        const containerDefault = view.screen.getByRole('.container-city')
        expect(containerDefault).toBeInTheDocument()

    })

})