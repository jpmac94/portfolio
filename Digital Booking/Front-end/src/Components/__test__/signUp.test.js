import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import React from "react";
import FormSignin from '../Signup/FormSignup'
import Signup from '../Signup/Signup'

/*Test para SignU;p*/
describe('singUp', () => {

    /*Test para FormSignin*/
   /* test('formSignUp', async () => {
        const component = render(
            <BrowserRouter>
                <FormSignin />
            </BrowserRouter>
        )
        const form = component.container.querySelector('.container-form')
        expect(form).toBeInTheDocument()
    })*/
    it("should create an entry in component state with the event value", () => {
        // given
        const component = shallow(<FormSignin />);
        const form = component.find('input');
        // when
        form.props().onChange({target: {
          name: 'Zoe',
          value: 'myValue'
        }});
        // then
        expect(component.state('input')).toEqual('myValue');
      });
      

    /*Test para SignU;p*/
    test('signUp', async () => {
        const component = render(
            <BrowserRouter>
                <Signup />
            </BrowserRouter>
        )
        const signDiv = component.container.querySelector('div')
        expect(signDiv).toBeInTheDocument()
    })


})