import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import ErrorLogin from '../Login/ErrorLogin'
import Form from '../Login/Form'
import Login from '../Login/Login'
import React from "react";
/*Test para Login*/
describe('ñpgin', () => {
    test('errorLogin', async () => {
        const component = render(
            <BrowserRouter>
                <ErrorLogin />
            </BrowserRouter>
        )
        const errorLogin = component.container.querySelector('#error-login')
        expect(errorLogin).toBeInTheDocument()
    })

    test('formLogin', async () => {
        const component = render(
            <BrowserRouter>
                <Form />
            </BrowserRouter>
        )
        const formLogin = component.container.querySelector('.container-forms')
        expect(formLogin).toBeInTheDocument()
    })

    test('login', async () => {
        const component = render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
        const loginDiv = component.container.querySelector('div')
        expect(loginDiv).toBeInTheDocument()
    })
})