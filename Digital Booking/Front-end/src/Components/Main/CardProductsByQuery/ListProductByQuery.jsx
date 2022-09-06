import React,{ useEffect, useState, memo, useContext } from "react";
import CardProductByQuery from "./CardProductByQuery";
import "../../../styles/card/cardRecomendation.css";
import { ContextProduct } from "../../Context/ContextProduct";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Pagination from "../CardRecomendation/Pagination";
import ContentLoader from "react-content-loader";
import CardProductByQuerySkeleton from "./CardProductByQuerySkeleton";

const ListProductByQuery = ({ idCategory }) => {
  const [productsByQuery, setProductsByQuery] = useState([]);
  const [newProductsFilters, setNewProductsFilters] = useState([]);
  const [titleC, setTitleC] = useState("");
  const [focoIcon1, setFocoIcon1] = useState(false);
  const [focoIcon2, setFocoIcon2] = useState(false);
  const [focoIcon3, setFocoIcon3] = useState(false);
  const {
    filterP,
    sumaFiltrer,
    restaFiltrer,
    stateFilters,
    errorCat,
    errorCity,
    errorDates,
    datesBlockSerch,
    setCityBlockSerch,
    cityBlockSerch,
    setDatesBlockSerch,

    flagByCategory,setFlagByCategory,
    flagByNameCity,setFlagByNameCity,

    setCleanCal,
    setCleanCity,

    setFechaReservaStart,
    setFechaReservaEnd,
  } = useContext(ContextProduct);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(8);

  const maximo = filterP.length / porPagina;

  //-----------------mÃ©todo productsByQuery--------------
  useEffect(() => {
    const fetchRecommendations = () => setProductsByQuery([...filterP]);
    fetchRecommendations();
    console.log(filterP);
  }, [filterP]);

  return (
    <>
      {filterP.length !== 0 ?(
        <div
          className="container-recommendation"
          key={productsByQuery.length !== 0 && productsByQuery[0].id + "LPBIC"}
        >
          <div id="containerTitleRecommendations">
            {Object.values(stateFilters[0])[0] !== "" &&
              Object.values(stateFilters[1])[0] === "" &&
              Object.values(stateFilters[2])[0] === "" &&
              !errorCat &&
              flagByCategory && (
                <div className="container-title-query">
                  {focoIcon1 ? (
                    <GrFormPrevious
                      onMouseLeave={() => setFocoIcon1(false)}
                      onClick={() =>{
                        restaFiltrer({ id: "" })
                        setFlagByCategory(false)
                      }}
                      className="iconTitleQuery"
                    />
                  ) : (
                    <GrFormNext
                      onMouseEnter={() => setFocoIcon1(true)}
                      onClick={() =>{
                        restaFiltrer({ id: "" })
                        setFlagByCategory(false)
                      }
                      } 
                      className="iconTitleQuery"
                    />
                  )}
                  
                  <h2 className="recommendation">
                    {filterP[0].category.title}
                  </h2>
                  
                </div>
              )
              
              
            }
            {Object.values(stateFilters[1])[0] !== "" &&
              Object.values(stateFilters[0])[0] === "" &&
              Object.values(stateFilters[2])[0] === "" &&
              !errorCity && 
              flagByNameCity&& (
                <div className="container-title-query">
                  {focoIcon2 ? (
                    <GrFormPrevious
                      onMouseLeave={() => setFocoIcon2(false)}
                      onClick={() =>{
                        setCleanCity(true)
                        setFlagByNameCity(false)
                        restaFiltrer({ nameCity: "" })}
                      } 
                      className="iconTitleQuery"
                    />
                  ) : (
                    <GrFormNext
                      onMouseEnter={() => setFocoIcon2(true)}
                      onClick={() =>{
                        setCleanCity(true)
                        setFlagByNameCity(false)
                        restaFiltrer({ nameCity: "" })}
                      }
                      className="iconTitleQuery"
                    />
                  )}
                  <h2 className="recommendation">{filterP[0].city.name}</h2>
                </div>
              )}
            {/* faltan las fechas */}
            {Object.values(stateFilters[2])[0] !== "" &&
              Object.values(stateFilters[0])[0] === "" &&
              Object.values(stateFilters[1])[0] === "" &&
              !errorDates && (
                <div className="container-title-query">
                  {focoIcon1 ? (
                    <GrFormPrevious
                      onMouseLeave={() => setFocoIcon1(false)}
                      onClick={() =>{
                        setCleanCal(true)
                        
                        setDatesBlockSerch('')
                        setFechaReservaStart([])
                        setFechaReservaEnd([])
                        restaFiltrer({ startDate: "", endDate: "" })
                      }
                      }
                      className="iconTitleQuery"
                    />
                  ) : (
                    <GrFormNext
                      onMouseEnter={() => setFocoIcon1(true)}
                      onClick={() =>{
                        setCleanCal(true)
                        setDatesBlockSerch('')
                        setFechaReservaStart([])
                        setFechaReservaEnd([])
                        restaFiltrer({ startDate: "", endDate: "" })
                      }
                      }
                      className="iconTitleQuery"
                    />
                  )}
                  <h2 className="recommendation">
                    {Object.values(datesBlockSerch)[0]} ~{" "}
                    {Object.values(datesBlockSerch)[1]}
                  </h2>
                </div>
              )}
            {Object.values(stateFilters[1])[0] !== "" &&
              Object.values(stateFilters[0])[0] !== "" &&
              Object.values(stateFilters[2])[0] === "" &&
              !errorCat &&
              !errorCity &&
              // flagByNameCity &&
              // flagByCategory && 
              (
                <div className="container-title-query">
                  {focoIcon1 ? (
                    <GrFormPrevious
                      onMouseLeave={() => setFocoIcon1(false)}
                      onClick={() => {
                        // setFlagByCategory(false)
                        // setFlagByNameCity(false)
                        restaFiltrer({ id: "" });
                      }}
                      className="iconTitleQuery"
                    />
                  ) : (
                    <GrFormNext
                      onMouseEnter={() => setFocoIcon1(true)}
                      onClick={() => {
                        // setFlagByCategory(false)
                        // setFlagByNameCity(false)
                        restaFiltrer({ id: "" });
                      }}
                      className="iconTitleQuery"
                    />
                  )}
                  <h2 className="recommendation">
                    {filterP[0].category.title}
                  </h2>
                  {focoIcon2 ? (
                    <GrFormPrevious
                      onMouseLeave={() => setFocoIcon2(false)}
                      onClick={() => {
                        setCleanCity(true)
                        setCityBlockSerch('')
                        restaFiltrer({ nameCity: "" });
                      }}
                      className="iconTitleQuery"
                    />
                  ) : (
                    <GrFormNext
                      onMouseEnter={() => setFocoIcon2(true)}
                      onClick={() => {
                        setCleanCity(true)
                        setCityBlockSerch('')
                        restaFiltrer({ nameCity: "" });
                      }}
                      className="iconTitleQuery"
                    />
                  )}
                  <h2 className="recommendation">{filterP[0].city.name}</h2>
                </div>
              )}

            {Object.values(stateFilters[0])[0] === "" &&
              Object.values(stateFilters[1])[0] === "" &&
              Object.values(stateFilters[2])[0] === "" && (
                <div className="container-title-query">
                  <h2 className="recommendation">Recommendations</h2>
                </div>
              )}
            
            {Object.values(stateFilters[1])[0] !== "" &&
              Object.values(stateFilters[0])[0] === "" &&
              Object.values(stateFilters[2])[0] !== "" &&
              !errorCity &&
              !errorDates &&
              // flagByNameCity && 
              (
                <div className="container-title-query">
                  {focoIcon1 ? (
                    <GrFormPrevious
                      onMouseLeave={() => setFocoIcon1(false)}
                      onClick={() => {
                        setCleanCity(true)
                        // setFlagByCategory(false)
                        setCityBlockSerch('')
                        restaFiltrer({ nameCity: "" });
                      }}
                      className="iconTitleQuery"
                    />
                  ) : (
                    <GrFormNext
                      onMouseEnter={() => setFocoIcon1(true)}
                      onClick={() => {
                        setCleanCity(true)
                        // setFlagByCategory(false)
                        setCityBlockSerch('')
                        restaFiltrer({ nameCity: "" });
                      }}
                      className="iconTitleQuery"
                    />
                  )}
                  <h2 className="recommendation">{filterP[0].city.name}</h2>
                  {focoIcon2 ? (
                    <GrFormPrevious
                      onMouseLeave={() => setFocoIcon2(false)}
                      onClick={() =>{
                        setCleanCal(true)
                        setDatesBlockSerch('')
                        setFechaReservaStart([])
                        setFechaReservaEnd([])
                        restaFiltrer({ startDate: "", endDate: "" })
        
                      }
                      }
                      className="iconTitleQuery"
                    />
                  ) : (
                    <GrFormNext
                      onMouseEnter={() => setFocoIcon2(true)}
                      onClick={() =>{
                        setCleanCal(true)
                        setDatesBlockSerch('')
                        setFechaReservaStart([])
                        setFechaReservaEnd([])
                        restaFiltrer({ startDate: "", endDate: "" })
        
                      }
                      }
                      className="iconTitleQuery"
                    />
                  )}
                  <h2 className="recommendation">
                    {Object.values(datesBlockSerch)[0]} /
                    {Object.values(datesBlockSerch)[1]}
                  </h2>
                </div>
              )}
              {/* //--------todos !==   ---- */}
              {Object.values(stateFilters[1])[0] !== "" &&
              Object.values(stateFilters[0])[0] !== "" &&
              Object.values(stateFilters[2])[0] !== "" &&
              !errorCat &&
              !errorCity &&
              !errorDates && 
              (
                <div className="container-title-query">
                  {focoIcon3 ? (
                    <GrFormPrevious
                      onMouseLeave={() => setFocoIcon3(false)}
                      onClick={() => {
                        restaFiltrer({ id: "" });
                      }}
                      className="iconTitleQuery"
                    />
                  ) : (
                    <GrFormNext
                      onMouseEnter={() => setFocoIcon3(true)}
                      onClick={() => restaFiltrer({ id: "" })}
                      className="iconTitleQuery"
                    />
                  )}
                  <h2 className="recommendation">{filterP[0].category.title}</h2>
                  {focoIcon1 ? (
                    <GrFormPrevious
                      onMouseLeave={() => setFocoIcon1(false)}
                      onClick={() => {
                        setCleanCity(true)
                        setCityBlockSerch('')
                        restaFiltrer({ nameCity: "" });
                      }}
                      className="iconTitleQuery"
                    />
                  ) : (
                    <GrFormNext
                      onMouseEnter={() => setFocoIcon1(true)}
                      onClick={() => {
                        setCleanCity(true)
                        setCityBlockSerch('')
                        restaFiltrer({ nameCity: "" });
                      }}
                      className="iconTitleQuery"
                    />
                  )}
                  <h2 className="recommendation">{filterP[0].city.name}</h2>
                  {focoIcon2 ? (
                    <GrFormPrevious
                      onMouseLeave={() => setFocoIcon2(false)}
                      onClick={() =>{
                        setCleanCal(true)
                        setDatesBlockSerch('')
                        setFechaReservaStart([])
                        setFechaReservaEnd([])
                        restaFiltrer({ startDate: "", endDate: "" })
                      }
                      }
                      className="iconTitleQuery"
                    />
                  ) : (
                    <GrFormNext
                      onMouseEnter={() => setFocoIcon2(true)}
                      onClick={() =>{
                        setCleanCal(true)
                        setDatesBlockSerch('')
                        setFechaReservaStart([])
                        setFechaReservaEnd([])
                        restaFiltrer({ startDate: "", endDate: "" })
                      }
                      }
                      className="iconTitleQuery"
                    />
                  )}
                  <h2 className="recommendation">
                    {Object.values(datesBlockSerch)[0]} ~{" "}
                    {Object.values(datesBlockSerch)[1]}
                  </h2>
                </div>
              )}
              {/* //------------------------- */}
            {Object.values(stateFilters[0])[0] !== "" &&
              Object.values(stateFilters[1])[0] === "" &&
              Object.values(stateFilters[2])[0] !== "" &&
              !errorCat &&
              !errorDates && (
                <div className="container-title-query">
                  {focoIcon1 ? (
                    <GrFormPrevious
                      onMouseLeave={() => setFocoIcon1(false)}
                      onClick={() => restaFiltrer({ id: "" })}
                      className="iconTitleQuery"
                    />
                  ) : (
                    <GrFormNext
                      onMouseEnter={() => setFocoIcon1(true)}
                      onClick={() => restaFiltrer({ id: "" })}
                      className="iconTitleQuery"
                    />
                  )}
                  <h2 className="recommendation">
                    {filterP[0].category.title}
                  </h2>
                  {focoIcon2 ? (
                    <GrFormPrevious
                      onMouseLeave={() => setFocoIcon2(false)}
                      onClick={() =>{
                        setFechaReservaStart([])
                        setFechaReservaEnd([])
                        restaFiltrer({ startDate: "", endDate: "" })
                      }
                      }
                      className="iconTitleQuery"
                    />
                  ) : (
                    <GrFormNext
                      onMouseEnter={() => setFocoIcon2(true)}
                      onClick={() =>{

                        setFechaReservaStart([])
                        setFechaReservaEnd([])
                        restaFiltrer({ startDate: "", endDate: "" })
                      }
                      }
                      className="iconTitleQuery"
                    />
                  )}
                  <h2 className="recommendation">
                    {Object.values(datesBlockSerch)[0]} ~{" "}
                    {Object.values(datesBlockSerch)[1]}
                  </h2>
                </div>
              )}
          </div>
          <div className="listRecos">
            {Object.values(stateFilters[0])[0] === "" &&
            Object.values(stateFilters[1])[0] === "" &&
            Object.values(stateFilters[2])[0] === ""
              ? filterP
                  .slice(
                    (pagina - 1) * porPagina,
                    (pagina - 1) * porPagina + porPagina
                  )
                  .map((rec, index) => (
                    <CardProductByQuery idCategory={idCategory} product={rec} />
                  ))
              : productsByQuery.map((rec, index) => (
                  <CardProductByQuery idCategory={idCategory} product={rec} />
                ))}
          </div>
          {Object.values(stateFilters[0])[0] === "" &&
            Object.values(stateFilters[1])[0] === "" &&
            Object.values(stateFilters[2])[0] === "" && (
              <Pagination
                pagina={pagina}
                setPagina={setPagina}
                maximo={maximo}
              />
            )}
        </div>
      )
    :
    <>
    <div className="listRecos">
            
    <CardProductByQuerySkeleton/>
    <CardProductByQuerySkeleton/>
    <CardProductByQuerySkeleton/>
    <CardProductByQuerySkeleton/>
    <CardProductByQuerySkeleton/>
    <CardProductByQuerySkeleton/>
    <CardProductByQuerySkeleton/>
    <CardProductByQuerySkeleton/>
    <CardProductByQuerySkeleton/>
    <CardProductByQuerySkeleton/>
          
        </div>
      
      
    </>}
    </>
  );
};

export default ListProductByQuery;