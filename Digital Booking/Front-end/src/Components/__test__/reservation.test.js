import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import React from "react";
import BlockDates from '../Reservation/BlockDates';
import ContainerData from '../Reservation/ContainerData';
import ContainerReservation from '../Reservation/ContainerReservation';
import DataReservation from '../Reservation/DataReservation';
import Reservation from '../Reservation/Reservation';

/*Test para Reservation*/
describe('Reservation', () => {
    test('blockDates', async () => {
        const component = render(
            <BrowserRouter>
                <BlockDates />
            </BrowserRouter>
        )
        const h2Card= component.container.querySelector('h2')
        expect(h2Card).toBeInTheDocument()
    })

    test('containerData', async () => {
        const component = render(
            <BrowserRouter>
                <ContainerData />
            </BrowserRouter>
        )
        const h2Card= component.container.querySelector('h2')
        expect(h2Card).toBeInTheDocument()
    })

    test('containerReservation', async () => {
        const component = render(
            <BrowserRouter>
                <ContainerReservation />
            </BrowserRouter>
        )
        const classCard= component.container.querySelector('.container-all-dates')
        expect(classCard).toBeInTheDocument()
    })

    test('dataReservation', async () => {
        const component = render(
            <BrowserRouter>
                <DataReservation />
            </BrowserRouter>
        )
        const formCard= component.container.querySelector('form')
        expect(formCard).toBeInTheDocument()
    })


    test('reservation', async () => {
        const component = render(
            <BrowserRouter>
                <Reservation />
            </BrowserRouter>
        )

        const divCard= component.container.querySelector('div')
        expect(divCard).toBeInTheDocument()
    })

    test('dataReservation', async () => {
        const component = render(
            <BrowserRouter>
                <DataReservation />
            </BrowserRouter>
        )

        const containerForm= component.container.querySelector('containerForm')
        expect(containerForm).toBeInTheDocument()
    })




})