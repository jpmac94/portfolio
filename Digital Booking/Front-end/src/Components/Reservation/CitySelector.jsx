import React, { useState, useEffect, useContext } from "react";
import { HiLocationMarker } from "react-icons/hi";
import Select from "react-select";
import { ContextProduct } from "./../Context/ContextProduct";
import DefaultValue from "./../Main/BlockSearch/DefaultValue";
import Opcion from "./../Main/BlockSearch/Opcion";
import { VscChromeClose } from "react-icons/vsc";
import OpcionCityReserv from "./OpcionCityReserv";

export default function SelectorCity() {
    
  const [cities, setCities] = useState([]);

  const { setCityBlockSerch,setCityR,cityR } = useContext(ContextProduct);

  const fCities = () => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/city/findAll",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setCities([...result]))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    fCities();
  }, []);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 15,
   
    }),
    container: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
      height: "40px",
      borderRadius: "5px",
      boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.15)",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      width: "100%",
      height: "40px",
    }),
    input: (provided, state) => ({
      ...provided,
      position: "absolute",
      padding:"20px",
 
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      display: "none",
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: "100%",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      height: "100%",
    }),
  };
  //---------------------manejo de react-select-----------------
  const handleSelectChange = (e) => {
 
    // console.log(e);
    setCityR({ nameCity: e.value });
  
   // sumaFiltrer({ nameCity: e.value });
    
  };
  //-------------------fin---------------------------------
  //console.log(cities[0]) defaultValue={{ label: <DefaultValue />, value: null }}  <VscChromeClose className="vsClose-city"/>
  const [close, setClose] = useState(true);
  /*if(value!==null){
    <VscChromeClose className={close ? "vsClose-city": "close-city-reservation"}/>
  }*/

  return (
    <>
      {cities.length !== 0 && (
        <div className="container-city-reservation"> 
          <Select 
            defaultValue={{ label: /*<VscChromeClose className={close ? "vsClose-city": "close-city-reservation"}/>*/ 'Inserte ciudad', value: null }}

            options={cities.map((city) => ({
              label: (<OpcionCityReserv ciudad={city.name}/>) , value: city.name }))}
           
            onChange={handleSelectChange}
            // value={cityR}
            search
            styles={customStyles}
            
          />
         
        
        </div>
      )}
    </>
  );
}
