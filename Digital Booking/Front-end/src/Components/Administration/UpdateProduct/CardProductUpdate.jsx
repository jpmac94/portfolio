import React, { useState } from 'react'
import RatingCard from '../../Main/RatingCard/RatingCard';
import FeatureList from '../../Main/FeatureList';
import { Link } from 'react-router-dom';

import { FaMapMarkerAlt } from "react-icons/fa";

export default function CardProductUpdate({ product }) {
    const productToDelete = product;

    const [clickParrafo, setClickParrafo] = useState(false);

    const handleButtonDeleteF = () => { };

    const handleButton = () => { };

    product !== undefined && console.log(productToDelete[0]);

    return (
        <>


            <div className="container-card-delete">
                <div className="title-product-delete">
                    <h2>Product to delete</h2>
                </div>

                {productToDelete[0] !== undefined && (
                    <div className="card-delete" key={productToDelete.id}>
                        <div className="image-delete">
                            <img
                                src={productToDelete[0].pictures[0].url}
                                // src={productUnit.crimg}
                                alt="imagen hotel"
                                className="image"
                            />
                        </div>
                        <div className="content-delete">
                            <RatingCard {...productToDelete[0]} />
                            {/*<div className="name-product-delete">
            <h3>{productToDelete[0].name}</h3>
    </div>*/}

                            <div className="ubi">
                                <p>
                                    <span>
                                        <FaMapMarkerAlt />
                                    </span>
                                    940m from the center{" "}
                                    {/*<Link
              className="show-map"
              to={
                "/maps/" +
                productToDelete.city.state.name +
                "/" +
                productToDelete.city.name +
                "/" +
                productToDelete.city.state.country.name
              }
            >
              SHOW ON MAP
            </Link>*/}
                                </p>

                                <div className="icons">
                                    <FeatureList propsDatos={productToDelete[0]} />
                                </div>
                            </div>

                            <p className="description-delete">
                                {productToDelete[0].description}
                                {/*clickParrafo
            ? productToDelete.description
            : productToDelete.description.substring(0, 230)}{" "}
          <span
            className="spanMoreLess"
            onClick={() => setClickParrafo(!clickParrafo)}
          >
            {clickParrafo ? "Less..." : "More..."}
          </span>
          {/* {productUnit.description}  <a href="">More..</a> */}
                            </p>
                            <div className="buttonsF">
                                <button
                                    onClick={handleButton}
                                    className="buttonF buttonDetailF"
                                >
                                    Cancel
                                </button>
                                <Link to="/formUpdateProduct" >
                                    <button
                                        onClick={handleButtonDeleteF}
                                        className="buttonF buttonDeleteF"
                                    >
                                        Update
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
