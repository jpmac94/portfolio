import React, { useEffect, useState } from "react";
import CardRecomendation from "./CardRecomendation.jsx";
import "../../../styles/card/cardRecomendation.css";
import Pagination from "./Pagination.jsx";

import Loader from "../../Loader";

export default function List(props) {
  const [recommendation, setRecommendation] = useState([]);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(8);

  const maximo = recommendation.length / porPagina;

  useEffect(() => {
    const fetchRecommendations = () => {
      var requestOptions = {
        method: "GET",
      };

      fetch(
        "http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/product/findAll",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          // console.log(result[0]);
          setRecommendation([...result]);
        })
        .catch((error) => console.log("error", error));
    };
    fetchRecommendations();
  }, []);

  return (
    <>
      <div className="container-recommendation">
        <h2 className="recommendation">Recommendations</h2>
        <div className="listRecos">
          {recommendation.length > 0 ? (
            recommendation
              .slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
              )
              .map((rec, index) => <CardRecomendation {...rec} />)
          ) : (
            <Loader />
          )}
        </div>
        <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </div>
    </>
  );
}
