import Footer from '../Footer';
import HeaderWithAButton from '../Header/HeaderWithAButton'
import FormSignup from '../Signup/FormSignup'
import React from 'react'

const Signup = () => {
    return ( 
        <div>
            <HeaderWithAButton title={"Login"} titulo="Login" />
            <FormSignup/>
            <Footer/>
        </div>

     );
}
 
export default Signup;