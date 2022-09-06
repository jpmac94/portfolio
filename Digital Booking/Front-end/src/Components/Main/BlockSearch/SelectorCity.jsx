import React, { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { HiLocationMarker } from "react-icons/hi";
import Select from "react-select";
import { ContextProduct } from "../../Context/ContextProduct";
import DefaultValue from "./DefaultValue";
import Opcion from "./Opcion";

export default function SelectorCity() {
  // const [citiesResults, setCitiesResults]=useState([])
  const [cities, setCities] = useState([]);

  const { setCityBlockSerch, sumaFiltrer, cleanCity, setCleanCity } = useContext(ContextProduct);

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
    console.log(e.label.props.pais);
    setValueCity({
      label: (
        <Opcion ciudad={e.value} pais={e.label.props.pais} />
      ),
      value: e.value,
    })
    setCityBlockSerch({ nameCity: e.value });
    sumaFiltrer({ nameCity: e.value });

  };
  //-------------------fin---------------------------------
  //console.log(cities[0])
  const [valueCity, setValueCity] = useState({ label: <DefaultValue />, value: null })
  const clearValue = () => {
    setValueCity({ label: <DefaultValue />, value: null })
  }
  useEffect(() => {
    if (cleanCity) {
      clearValue();
    }
  }, [cleanCity === true && cleanCity])
  
  if (valueCity.value === null) {
    setCleanCity(false)
  }
  console.log(valueCity.value);

  return (
    <>
      {cities.length !== 0 && (
        <div className="container-city">
          <Select
            value={valueCity}
            classNamePrefix="select"
            defaultValue={{ label: <DefaultValue />, value: null }}
            options={cities.map((city) => ({
              label: (
                <Opcion ciudad={city.name} pais={city.state.country.name} />
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
