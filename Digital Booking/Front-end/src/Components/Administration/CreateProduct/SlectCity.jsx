import React, { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { HiLocationMarker } from "react-icons/hi";
import Select from "react-select";
import { ContextProduct } from "../../Context/ContextProduct";

import DflValue from "./DflValue";
import OpcionC from "./OpcionC";

export default function SlectorCity() {
  // const [citiesResults, setCitiesResults]=useState([])
  const [cities, setCities] = useState([]);


  const { setCityAdmin,cityAdmin
  } =useContext(ContextProduct)
    // 
 
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
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      width: "100%",
      height: "40px",
    }),
    input: (provided, state) => ({
      ...provided,
      position: "absolute",
      padding: "20px",
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
    
    setValueCity({
      label: (
        <OpcionC ciudad={e.value} pais={e.label.props.pais} />
      ),
      value: e.value,
    })
    setCityAdmin( e.label.props);
    console.log(e.label.props);

  };
  //-------------------fin---------------------------------
  //console.log(cities[0])
  const [valueCity, setValueCity] = useState({ label: <DflValue />, value: null })

 
  useEffect(() => {
     
    setCityAdmin([])

}, [valueCity])
console.log(cityAdmin)
  return (
    <>
      {cities.length !== 0 && (
        <div className="container-city2">
          <Select
            value={valueCity}
            classNamePrefix="select"
            defaultValue={{ label: <DflValue />, value: null }}
            options={cities.map((city) => ({
              label: (
                <OpcionC id = {city.id} ciudad={city.name}  pais={city.state.country.name} />
              ),
              value: city.name,
            }))}
            onChange={handleSelectChange}
            search
            styles={customStyles}
          />
        </div>
      )}
    </>
  );
}
