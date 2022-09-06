import React from 'react'
import './../../styles/product/policyBlockStyle.css'

export default function PolicyBlock({datosHeader}) {
   
    return (
        <>
            <div className='container-policy'>
                <h2>
                    What do you have to know?
                </h2>
               
                <div className='policy'>
                    <div className='house-rules'>
                        <div>
                            <h3>
                                House's rules
                            </h3>
                        </div>

                        <div>
                            <p>
                                Check-out 10:00
                            </p>

                            <p>
                                No parties allowed
                            </p>

                            <p>
                                No Smoking
                            </p>
                        </div>
                    </div>

                    <div className='health-security'>
                        <div>
                            <h3>
                                Health and security
                            </h3>
                        </div>
                        <div>
                            <p>
                                Social distancing guidelines and other rules related to covid-19 apply
                            </p>
                            <p>
                                Smoke detector
                            </p>

                            <p>
                                Security deposit
                            </p>


                        </div>
                    </div>

                    <div className='cancellation-policy'>
                        <div>
                            <h3>Cancellation policy</h3>
                        </div>
                        <div>
                            <p>
                                Add your travel dates to get cancellation policies
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
