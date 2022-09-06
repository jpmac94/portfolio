import React, { Component } from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../Header/Header'
import { BrowserRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import HeaderWithAButton from '../Header/HeaderWithAButton'

/*Teste do componente Header*/
describe('header', () => {
    test('header', async () => {
        const component = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const header = component.container.querySelector('header')
        expect(header).toBeInTheDocument()
    })

   /* test('paragraph', async () => {
        const component = render(
            <BrowserRouter>
                    <Header />
            </BrowserRouter>
        )
        const paragraph = component.container.querySelector('p')
        expect(paragraph).toBeInTheDocument()
    })
    test('paragraph-content',async ()=>{
        const component = render(
            <BrowserRouter>
                    <Header />
            </BrowserRouter>
        )
        const paragraph = component.container.querySelector('p')
        expect(paragraph).toHaveTextContent('Feel at home')
    })

    test('function',async ()=>{
        const component = render(
            <BrowserRouter>
                    <Header />
            </BrowserRouter>
        )
        const boton=component.container.querySelector('.button')

        act(()=>{
            fireEvent.click(boton)
        })
        expect(component.container).toHaveTextContent("Log In")
    })
*/

    /*Test gheaderWithAButton*/
    test('headerWAButton',async ()=>{
        const component = render(
            <BrowserRouter>
                    <HeaderWithAButton />
            </BrowserRouter>
        )
        const headerWAButton = component.container.querySelector('header')
        expect(headerWAButton).toBeInTheDocument()
    })
})