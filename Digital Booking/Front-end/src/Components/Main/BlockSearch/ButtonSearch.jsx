import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProduct } from "../../Context/ContextProduct";
import Swal from "sweetalert2";

export default function ButtonSearch() {
  const { sumaFiltrer, cityBlockSerch, datesBlockSerch,setCleanCal,setCleanCity} =
    useContext(ContextProduct);
  const nav = useNavigate();

  const handleClickSerch = () => {
    // nameCity!==""&&nav('/productsByCity/'+nameCity);
    // setCleanCal(true)
    // setCleanCity(true)
    cityBlockSerch !== "" && console.log(cityBlockSerch);
    datesBlockSerch !== "" && console.log(datesBlockSerch);
    cityBlockSerch !== "" && sumaFiltrer(cityBlockSerch);
    datesBlockSerch !== "" && sumaFiltrer(datesBlockSerch);
    if (cityBlockSerch === "" && datesBlockSerch === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There is no result for your search. Please try another.!",
      });
    }
    
    
  
  };

  return (
    <div className="container-search">
      <button onClick={handleClickSerch} className="button-block-search">
        Search
      </button>
    </div>
  );
}
