import React, { useState } from 'react'
import Footer from '../../Footer'
import Header from '../../Header/Header'
import HeaderBlockAdm from '../CreateProduct/HeaderBlockAdm';
import CarouselFet from './../CreateProduct/Carousel'
import './../../../styles/admin/updateStyles.css'
import NewMao from '../CreateProduct/NewMao';

export default function FormUpdateProduct({ product }) {
    const productUpdate = product[0];
    productUpdate !== undefined && console.log(productUpdate);

    const [name, setName] = useState({ field: productUpdate.name, valid: null });
    const [category, setCategory] = useState({ field: productUpdate.category.title, valid: null });
    const [adress, setAdress] = useState({ field: productUpdate.address.street + ' ' + productUpdate.address.number, valid: null });
    const [city, setCity] = useState({ field: productUpdate.city.name, valid: null });
    const [country, setCountry] = useState({ field: productUpdate.city.state.country.name, valid: null });
    const [state, setState] = useState({ field: productUpdate.city.state.name, valid: null });
    const [latitude, setLatitude] = useState({ field: productUpdate.address.latitude, valid: null });
    const [longitude, setLongitude] = useState({ field: productUpdate.address.longitude, valid: null });
    const [description, setDescription] = useState({ field: productUpdate.description, valid: null });
    const [clickParrafo, setClickParrafo] = useState(false);

    const handleButtonDeleteF = () => { };

    const handleButton = () => { };

    const onChangeName = ({ currentTarget }) =>
        setName({ ...name, field: currentTarget.value });
    const onChangeCategory = ({ currentTarget }) =>
        setCategory({ ...category, field: currentTarget.value });
    const onChangeAdress = ({ currentTarget }) =>
        setAdress({ ...adress, field: currentTarget.value });
    const onChangeCity = ({ currentTarget }) =>
        setCity({ ...city, field: currentTarget.value });
    const onChangeCountry = ({ currentTarget }) =>
        setCountry({ ...country, field: currentTarget.value });
    const onChangeState = ({ currentTarget }) =>
        setState({ ...state, field: currentTarget.value });
    const onChangeLatitude = ({ currentTarget }) =>
        setLatitude({ ...latitude, field: currentTarget.value });
    const onChangeLongitude = ({ currentTarget }) =>
        setLongitude({ ...longitude, field: currentTarget.value });
    const onChangeDescription = ({ currentTarget }) =>
        setDescription({ ...description, field: currentTarget.value });

    return (
        <>
            <div className="container-form-update">
                <h2 className="c h2"> Update Information </h2>
                <div className='div-update-info'>
                    {/*nombre*/}
                    <div className="group">
                        <label className="labels" htmlFor="name">
                            Name of the Product
                        </label>

                        <input
                            className={name.valid === true ? "controlsInvalid" : "controls"}
                            type="text"
                            name="name"
                            id="name"
                            onChange={onChangeName}
                            placeholder={name}
                            value={name.field}
                        //onBlur={validatorName}
                        />
                        {/*name.valid === true ? (
                        <span className="incorect n"> Required field </span>
                    ) : (
                        ""
                    )*/}
                    </div>
                    {/* HAY QUE CONSUMIR API */}
                    {/*categoria*/}
                    <div className="group">
                        <label className="labels" htmlFor="category">
                            Category
                        </label>
                        <select
                            className={category.valid === true ? "controlsInvalid" : "controls"}
                            name="select-category"
                            //onBlur={validatorCategory}
                            onChange={onChangeCategory}
                            value={category.field}
                        >
                            <option value="Hotels">Hotels</option>
                            <option value="Hotels">Hostels</option>
                            <option value="Hotels">Apartment</option>
                            <option value="Bed and Breakfast">Bed and Breakfast</option>

                        </select>

                        {/*category.valid === true ? (
                        <span className="incorect l"> Required field</span>
                    ) : (
                        ""
                    )*/}
                    </div>
                </div>

                <div className='div-update-info'>
                    {/*adress*/}
                    <div className="group">
                        <label className="labels" htmlFor="adress">
                            Adress
                        </label>
                        <input
                            className={adress.valid === true ? "controlsInvalid" : "controls"}
                            placeholder={adress.field}
                            type="adress"
                            name="adress"
                            id="adress"
                            onChange={onChangeAdress}
                            value={adress.field}
                        //onBlur={validatorAdress}
                        />
                        {/* adress.valid === true ? (
                        <span className="incorect e">Required field</span>
                    ) : (
                        ""
                    )*/}
                    </div>
                    {/*country*/}
                    <div className="group">
                        <label className="labels" htmlFor="country">
                            Country
                        </label>
                        <input
                            className={country.valid === true ? "controlsInvalid" : "controls"}
                            type="country"
                            name="country"
                            id="country"
                            onChange={onChangeCountry}
                            placeholder={country.field}
                            value={country.field}
                        // onBlur={validatorCountry}
                        />
                           {/*} <option value="Bed and Breakfast">Bed and Breakfast</option>
                            <option value="Hotels">Hotels</option>
                </select>*/}

                        {/*country.valid === true ? (
                            <span className="incorect e">Required field</span>
                        ) : (
                            ""
                        )*/}
                    </div>
                </div>
                <div className='div-update-info'>
                    {/*estado*/}
                    <div className="group">
                        <label className="labels" htmlFor="state">
                            State
                        </label>
                        <input
                            className={state.valid === true ? "controlsInvalid" : "controls"}
                            type="state"
                            name="state"
                            id="state"
                            onChange={onChangeState}
                            placeholder={state.field}
                            value={state.field}
                        // onBlur={validatorState}
                        />
                        

                        {state.valid === true ? (
                            <span className="incorect e">Required field</span>
                        ) : (
                            ""
                        )}
                    </div>
                    {/*ciudad*/}
                    <div className="group">
                        <label className="labels" htmlFor="city">
                            City
                        </label>
                        <input
                            className={city.valid === true ? "controlsInvalid" : "controls"}
                            type="city"
                            name="city"
                            id="city"
                            onChange={onChangeCity}
                            placeholder={city.field}
                            value={city.field}
                        //   onBlur={validatorCity}
                        />
                  

                    </div>
                </div>

                <div className='div-update-info'>
                    <div className="group">
                        <label className="labels" htmlFor="longuitude">
                            Longitude
                        </label>
                        <input
                            className={longitude.valid === true ? "controlsInvalid" : "controls"}
                            type="longuitude"
                            name="longuitude"
                            id="longuitude"
                            placeholder="Enter the Longitude"
                            onChange={onChangeLongitude}
                            value={longitude.field}
                        // onBlur={validatorLongitude}
                        >

                        </input>

                        {/*longitude.valid === true ? (
                        <span className="incorect e">Please enter a valid longitude</span>
                    ) : (
                        ""
                    )*/}
                    </div>
                    <div className="group">
                        <label className="labels" htmlFor="latitude">
                            Latitude
                        </label>
                        <input
                            className={latitude.valid === true ? "controlsInvalid" : "controls"}
                            type="latitude"
                            name="latitude"
                            id="latitude"
                            placeholder="Enter Latitude"
                            onChange={onChangeLatitude}
                            value={latitude.field}
                        // onBlur={validatorLatitude}
                        >

                        </input>

                    </div>
                </div>

                {/*latitude.valid === true ? (
                        <span className="incorect e">Please enter a valid latitude</span>
                    ) : (
                        ""
                    )**/}

                <div className="group observations">
                    <label for="description">Description</label>
                    <textarea
                        //   onBlur={validatorDescription}
                        className={
                            description.valid === true
                                ? "controlsInvalid textarea"
                                : "controls textarea"
                        }
                        onChange={onChangeDescription}
                        name="description"
                        id="description"
                        cols="30"
                        rows="5"
                        placeholder={description.field}
                        value={description.field}
                    ></textarea>
                    {/*description.valid === true ? (
                        <span className="incorect e">Please enter a valid description</span>
                    ) : (
                        ""
                    )*/}
                </div>

            </div>






        </>
    )
}
