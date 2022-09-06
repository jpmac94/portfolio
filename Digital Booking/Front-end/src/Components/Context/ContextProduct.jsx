import React, { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'

export const ContextProduct = createContext()

const ProviderProduct = ({ children }) => {
    // const [productItem,setProductItem]=useState(()=>{
    //     try{
    //         const productsInLocalStorage=localStorage.getItem('productFaF')
    //         return productsInLocalStorage?JSON.parse(productsInLocalStorage):[]
    //     }catch(error){
    //         return []
    //     }
    // })
    //-------------seccion de nuevo producto------------------------

    const [cateAdmin, setCateAdmin] = useState('');
    const [nameAdmin, setNameAdmin] = useState("");
    const [addressAdmin, setAddressAdmin] = useState([]);
    const [countryAdmin, setCountryAdmin] = useState("");
    const [cityAdmin, setCityAdmin] = useState({});


    const [numberAdmin, setNumberAdmin] = useState("");
    const[longitudeAdmin, setLongitudeAdmin] = useState(null);
    const[latitudeAdmin, setLatitudeAdmin] = useState(null);
    console.log(longitudeAdmin + "es latiContext");
    console.log(latitudeAdmin + "Context")
    const[stateAdmin,setStateAdmin]=useState("");
    const[descriptionAdmin, setDescriptionAdmin] = useState("");
    const[urlAdmin,setUrlAdmin] = useState('');
    const[housesRulesC, setHousesRulesC]=useState('')
    const[healthCareC, setHealthCareC]=useState('')
    const[cancellationPolicyC, setCancellationPolicyC]=useState('')
    


    nameAdmin!==''&&console.log(nameAdmin[0]);
    console.log();
    cateAdmin!==''&&console.log(cateAdmin[0]);
    descriptionAdmin!==''&&console.log(descriptionAdmin[0]);
    housesRulesC!==''&&console.log(housesRulesC.field);
    healthCareC!==''&&console.log(healthCareC.field);
    cancellationPolicyC!==''&&console.log(cancellationPolicyC.field);
    urlAdmin!==''&&console.log(urlAdmin);
    addressAdmin.length!==0&&console.log(addressAdmin);
    const [featureContext,setFeatureContext]=useState([])

    useEffect(()=>{

        if(featureContext.length!==0){

            console.log(featureContext);
        }
    },[featureContext])
    //---------------------------------------------------------------

    const [productItem,setProductItem]=useState([])
    const [idProductItem,setIdProductItem]=useState('')
    const [idProductItemDelete,setIdProductItemDelete]=useState('')
    const [userName,setUserName]=useState('')
    const [boolDelFav,setBoolDelFav]=useState(false)
    const [boolSaveFav,setBoolSaveFav]=useState(false)
    //----variable local hasta qye se arregle el username
    const usernamelocal = 'marcos@gmail.com'
    // useEffect(()=>{
    //     if(JSON.parse(localStorage.getItem("nombreUsuario"))!==''){
    //         setUserName(JSON.parse(localStorage.getItem("nombreUsuario")))
    //     }
    //     console.log(userName);
    //     console.log(JSON.parse(localStorage.getItem("nombreUsuario")));
    // },[])
    useEffect(() => {
        // console.log(productItem);
        console.log(userName);
        console.log(JSON.parse(localStorage.getItem("nombreUsuario")));
        if (userName !== '') {
            console.log(userName);
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/favourite/findFavouriteByUserName?userName=" + userName, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    setProductItem([...result])
                })
                .catch(error => console.log('error', error));
        }

    }, [userName])
    // useEffect(()=>{
    //     console.log(boolSaveFav);
    //     console.log(userName);
    //     console.log(JSON.parse(localStorage.getItem("nombreUsuario")));
    //     if(boolSaveFav){
    //         console.log(userName);
    //         let requestOptions = {
    //             method: 'GET',
    //             redirect: 'follow'
    //           };

    //           fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com//api/favourite/findFavouriteByUserName?userName="+userName, requestOptions)
    //             .then(response => response.json())
    //             .then(result2 => {
    //                 console.log(result2);
    //                 if(result2.length!==0){
    //                     result2.forEach(f=>setProductItem([...productItem,f]))
    //                 }
    //                 // setProductItem([...productItem,result2])
    //                 setBoolSaveFav(false)
    //             })
    //             .catch(error => console.log('error', error));
    //     }

    // },[boolSaveFav])
    useEffect(() => {
        console.log(userName);
        console.log(JSON.parse(localStorage.getItem("nombreUsuario")));
        if (userName !== '') {
            console.log(userName);
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/favourite/findFavouriteByUserName?userName=" + userName, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    setProductItem([...result])
                })
                .catch(error => console.log('error', error));
        }

    }, [])

    useEffect(() => {
        //localStorage.setItem('productFaF',JSON.stringify(productItem))
        console.log(idProductItem);
        console.log(userName);
        if (idProductItem !== '' && usernamelocal !== '') {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify({
                "usuario": {
                    "nombreUsuario": userName
                },
                "product": {
                    "id": idProductItem
                }
            });

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/favourite/save", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log("125");
                    console.log(result)

                    // const n=filterP.filter(f=>f.id===result.product.id)
                    // // setProductItem([...productItem,n])
                    // n.forEach(f=>console.log(f))

                    setIdProductItem('')
                    console.log(result)
                    let requestOptions = {
                        method: 'GET',
                        redirect: 'follow'
                    };

                    fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/favourite/findById/" + result.id, requestOptions)
                        .then(response => response.json())
                        .then(result => {
                            console.log(result);
                            setProductItem([...productItem, result])
                        })
                        .catch(error => console.log('error', error));
                })

                .catch(error => console.log('error', error));
        }
    }, [idProductItem]
    )

    useEffect(() => {
        if (idProductItemDelete !== '') {

            console.log(idProductItemDelete);
            let requestOptions = {
                method: 'DELETE',
                redirect: 'follow'
            };

            fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/favourite/delete/" + idProductItemDelete, requestOptions)
                .then(response => response.json())
                .then(result => {
                    const nl = productItem.filter(f => f.id !== idProductItemDelete)
                    console.log(nl);
                    setProductItem([...nl])
                    setIdProductItemDelete('')
                    console.log(result)
                })
                .catch(error => {
                    const nl = productItem.filter(f => f.id !== idProductItemDelete)
                    console.log(nl);
                    setProductItem([...nl])
                    setIdProductItemDelete('')

                    console.log('error', error);
                })

        }
    }, [idProductItemDelete])

    // useEffect(()=>{
    //     // console.log(userName);
    //     // console.log(JSON.parse(localStorage.getItem("nombreUsuario")));
    //     console.log(boolDelFav);
    //     if(boolDelFav){
    //         console.log(userName);
    //         let requestOptions = {
    //             method: 'GET',
    //             redirect: 'follow'
    //           };

    //           fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com//api/favourite/findFavouriteByUserName?userName="+userName, requestOptions)
    //             .then(response => response.json())
    //             .then(result => {
    //                 console.log(result);
    //                 setProductItem([...result])
    //                 setBoolDelFav(false)
    //             })
    //             .catch(error => console.log('error', error));
    //     }

    // },[boolDelFav])

    const addProductToFavorite = (product) => {
        return setProductItem([...productItem, product]);
    }

    const deleteProductToFavorite = (product) => {
        return setProductItem(
            productItem.filter(productInFavorite => productInFavorite.id !== product.id)
        )

    }
    // console.log(productItem);
    //---------------------city y dates en blockSerch-----
    const [cityBlockSerch, setCityBlockSerch] = useState('')
    const [datesBlockSerch, setDatesBlockSerch] = useState('')
    //-----------------------------------------------------

    //------------estados para que no se renderice el nombre del filtro, hasta que esté cargado--
    const [flagByCategory, setFlagByCategory] = useState(false)
    const [flagByNameCity, setFlagByNameCity] = useState(false)
    //-------------------------------------------------------------------------------------------
    //-----------llamados a los endpoints específicos----
    const [stateFilters, setStateilters] = useState([{ id: '' }, { nameCity: '' }, { startDate: '', endDate: '' }])
    const [filtroOut, setFiltroOut] = useState(null)
    const [errorCat, setErrorCat] = useState(false)
    const [errorCity, setErrorCity] = useState(false)
    const [errorDates, setErrorDates] = useState(false)
    const [addBool, setAddBool] = useState(null)
    const sumaFiltrer = (sumF) => {
        console.log("Entró a la suma");
        if (Object.keys(sumF)[0] === 'id' && stateFilters[1] === '' && stateFilters[2] === '') {
            console.log("Entró a la al if suma");
            // setStateilters([...stateFilters,stateFilters[0]=sumF])
            const nuevoA = [sumF, { nameCity: '' }, { startDate: '', endDate: '' }]
            setFiltroOut(sumF)
            setErrorCat(false)
            setStateilters([...nuevoA])
            setAddBool(true)

        }
        if (Object.keys(sumF)[0] === 'id' && stateFilters[1] !== '' && stateFilters[2] === '') {
            console.log("Entró a la al if suma");
            // setStateilters([...stateFilters,stateFilters[0]=sumF])
            const nuevoA = [sumF, stateFilters[1], { startDate: '', endDate: '' }]
            setFiltroOut(sumF)
            setErrorCat(false)
            setStateilters([...nuevoA])
            setAddBool(true)

        }
        if (Object.keys(sumF)[0] === 'id' && stateFilters[1] === '' && stateFilters[2] !== '') {
            console.log("Entró a la al if suma");
            // setStateilters([...stateFilters,stateFilters[0]=sumF])
            const nuevoA = [sumF, { nameCity: '' }, stateFilters[2]]
            setFiltroOut(sumF)
            setErrorCat(false)
            setStateilters([...nuevoA])
            setAddBool(true)

        }
        if (Object.keys(sumF)[0] === 'id' && stateFilters[1] !== '' && stateFilters[2] !== '') {
            console.log("Entró a la al if suma");
            // setStateilters([...stateFilters,stateFilters[0]=sumF])
            const nuevoA = [sumF, stateFilters[1], stateFilters[2]]
            setFiltroOut(sumF)
            setErrorCat(false)
            setStateilters([...nuevoA])
            setAddBool(true)

        }

        if (Object.keys(sumF)[0] === 'nameCity' && stateFilters[0] === '' && stateFilters[2] === '') {
            console.log("Entró a la al if suma nameCity");
            // setStateilters([...stateFilters,stateFilters[0]=sumF])
            const nuevoA = [{ id: '' }, sumF, { startDate: '', endDate: '' }]
            setFiltroOut(sumF)
            setErrorCity(false)
            setStateilters([...nuevoA])
            setAddBool(true)
        }
        if (Object.keys(sumF)[0] === 'nameCity' && stateFilters[0] !== '' && stateFilters[2] === '') {
            console.log("Entró a la al if suma nameCity");
            // setStateilters([...stateFilters,stateFilters[0]=sumF])
            const nuevoA = [stateFilters[0], sumF, { startDate: '', endDate: '' }]
            setFiltroOut(sumF)
            setErrorCity(false)
            setStateilters([...nuevoA])
            setAddBool(true)
        }
        if (Object.keys(sumF)[0] === 'nameCity' && stateFilters[0] === '' && stateFilters[2] !== '') {
            console.log("Entró a la al if suma nameCity");
            // setStateilters([...stateFilters,stateFilters[0]=sumF])
            const nuevoA = [{ id: '' }, sumF, stateFilters[2]]
            setFiltroOut(sumF)
            setErrorCity(false)
            setStateilters([...nuevoA])
            setAddBool(true)
        }
        if (Object.keys(sumF)[0] === 'nameCity' && stateFilters[0] !== '' && stateFilters[2] !== '') {
            console.log("Entró a la al if suma nameCity");
            // setStateilters([...stateFilters,stateFilters[0]=sumF])
            const nuevoA = [stateFilters[0], sumF, stateFilters[2]]
            setFiltroOut(sumF)
            setErrorCity(false)
            setStateilters([...nuevoA])
            setAddBool(true)
        }
        if (Object.keys(sumF)[0] === 'startDate' && Object.keys(sumF)[1] === 'endDate' && stateFilters[0] === '' && stateFilters[1] === '') {
            console.log("Entró a la al if suma");
            // setStateilters([...stateFilters,stateFilters[0]=sumF])
            const nuevoA = [{ id: '' }, { nameCity: '' }, sumF]
            setFiltroOut(sumF)
            setErrorDates(false)
            setStateilters([...nuevoA])
            setAddBool(true)
        }

        if (Object.keys(sumF)[0] === 'startDate' && Object.keys(sumF)[1] === 'endDate' && stateFilters[0] !== '' && stateFilters[1] === '') {
            console.log("Entró a la al if suma");
            // setStateilters([...stateFilters,stateFilters[0]=sumF])
            const nuevoA = [stateFilters[0], { nameCity: '' }, sumF]
            setFiltroOut(sumF)
            setErrorDates(false)
            setStateilters([...nuevoA])
            setAddBool(true)
        }
        if (Object.keys(sumF)[0] === 'startDate' && Object.keys(sumF)[1] === 'endDate' && stateFilters[0] === '' && stateFilters[1] !== '') {
            console.log("Entró a la al if suma");
            // setStateilters([...stateFilters,stateFilters[0]=sumF])
            const nuevoA = [{ id: '' }, stateFilters[1], sumF]
            setFiltroOut(sumF)
            setErrorDates(false)
            setStateilters([...nuevoA])
            setAddBool(true)
        }
        if (Object.keys(sumF)[0] === 'startDate' && Object.keys(sumF)[1] === 'endDate' && stateFilters[0] !== '' && stateFilters[1] !== '') {
            console.log("Entró a la al if suma");
            // setStateilters([...stateFilters,stateFilters[0]=sumF])
            const nuevoA = [stateFilters[0], stateFilters[1], sumF]
            setFiltroOut(sumF)
            setErrorDates(false)
            setStateilters([...nuevoA])
            setAddBool(true)
        }


    }
    const restaFiltrer = (restaF) => {
        console.log("Entró a la resta");
        if (Object.keys(restaF)[0] === 'id' && stateFilters[1] === '' && stateFilters[2] === '') {
            console.log("Entró a la al if resta");
            const nuevoA = [restaF, { nameCity: '' }, { startDate: '', endDate: '' }]

            setAddBool(false)
            setStateilters([...nuevoA])

            console.log(addBool);

        }
        if (Object.keys(restaF)[0] === 'id' && stateFilters[1] !== '' && stateFilters[2] === '') {
            console.log("Entró a la al if resta");
            const nuevoA = [restaF, stateFilters[1], { startDate: '', endDate: '' }]

            setAddBool(false)
            setFiltroOut(stateFilters[1])
            setStateilters([...nuevoA])

            console.log(addBool);

        }
        if (Object.keys(restaF)[0] === 'id' && stateFilters[1] === '' && stateFilters[2] !== '') {
            console.log("Entró a la al if resta");
            const nuevoA = [restaF, { nameCity: '' }, stateFilters[2]]

            setAddBool(false)
            setFiltroOut(stateFilters[2])
            setStateilters([...nuevoA])

            console.log(addBool);

        }
        if (Object.keys(restaF)[0] === 'id' && stateFilters[1] !== '' && stateFilters[2] !== '') {
            console.log("Entró a la al if resta");
            const nuevoA = [restaF, stateFilters[1], stateFilters[2]]

            setAddBool(false)
            setStateilters([...nuevoA])

            console.log(addBool);

        }
        if (Object.keys(restaF)[0] === 'nameCity' && stateFilters[0] === '' && stateFilters[2] === '') {
            console.log("Entró a la al if resta");
            // setStateilters([...stateFilters,stateFilters[0]=restaF])
            const nuevoA = [{ id: '' }, restaF, { startDate: '', endDate: '' }]

            setStateilters([...nuevoA])
            setAddBool(false)
        }
        if (Object.keys(restaF)[0] === 'nameCity' && stateFilters[0] !== '' && stateFilters[2] === '') {
            console.log("Entró a la al if resta");
            // setStateilters([...stateFilters,stateFilters[0]=restaF])
            setFiltroOut(stateFilters[0])
            const nuevoA = [stateFilters[0], restaF, { startDate: '', endDate: '' }]

            setStateilters([...nuevoA])
            setAddBool(false)
        }
        if (Object.keys(restaF)[0] === 'nameCity' && stateFilters[0] === '' && stateFilters[2] !== '') {
            console.log("Entró a la al if resta");
            // setStateilters([...stateFilters,stateFilters[0]=restaF])
            const nuevoA = [{ id: '' }, restaF, stateFilters[2]]
            setFiltroOut(stateFilters[2])
            setStateilters([...nuevoA])
            setAddBool(false)
        }
        if (Object.keys(restaF)[0] === 'nameCity' && stateFilters[0] !== '' && stateFilters[2] !== '') {
            console.log("Entró a la al if resta");
            // setStateilters([...stateFilters,stateFilters[0]=restaF])
            const nuevoA = [stateFilters[0], restaF, stateFilters[2]]

            setStateilters([...nuevoA])
            setAddBool(false)
        }
        if (Object.keys(restaF)[0] === 'startDate' && Object.keys(restaF)[1] === 'endDate' && stateFilters[0] === '' && stateFilters[1] === '') {
            console.log("Entró a la al if resta");
            // setStateilters([...stateFilters,stateFilters[0]=restaF])
            const nuevoA = [{ id: '' }, { nameCity: '' }, restaF]

            setStateilters([...nuevoA])
            setAddBool(false)
        }
        if (Object.keys(restaF)[0] === 'startDate' && Object.keys(restaF)[1] === 'endDate' && stateFilters[0] !== '' && stateFilters[1] === '') {
            console.log("Entró a la al if resta");
            // setStateilters([...stateFilters,stateFilters[0]=restaF])
            const nuevoA = [stateFilters[0], { nameCity: '' }, restaF]
            setFiltroOut(stateFilters[0])
            setStateilters([...nuevoA])
            setAddBool(false)
        }
        if (Object.keys(restaF)[0] === 'startDate' && Object.keys(restaF)[1] === 'endDate' && stateFilters[0] === '' && stateFilters[1] !== '') {
            console.log("Entró a la al if resta");
            const nuevoA = [{ id: '' }, stateFilters[1], restaF]
            setFiltroOut(stateFilters[1])
            setStateilters([...nuevoA])
            setAddBool(false)
        }
        if (Object.keys(restaF)[0] === 'startDate' && Object.keys(restaF)[1] === 'endDate' && stateFilters[0] !== '' && stateFilters[1] !== '') {
            console.log("Entró a la al if resta");
            const nuevoA = [stateFilters[0], stateFilters[1], restaF]

            setStateilters([...nuevoA])
            setAddBool(false)
        }

    }
    useEffect(() => {
        // console.log(stateFilters);
        llamadosApi()
    }, [stateFilters])
    //----------------------fin--------------------------
    //-----------------FILTER----------------
    const [filterP, setFilterP] = useState('')
    // const [filterP,setFilterP]=useState(()=>{
    //     try{
    //         const filtersInLocalStorage=localStorage.getItem('filtersP2')
    //         return filtersInLocalStorage?JSON.parse(filtersInLocalStorage):[]
    //     }catch(error){
    //         return []
    //     }
    // })

    // useEffect(()=>{
    //     localStorage.setItem('filtersP2',JSON.stringify(filterP))
    //     // console.log(filter);
    // },[filterP]
    // )


    // console.log(allProductsContext);
    console.log(stateFilters);


    //------------------llamados a los métodos de la api--------------------
    const fetchCompleto = () => {
        let requestOptions = {
            method: "GET"
        };

        fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/product/findAll", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                //  console.log(result);
                setFilterP([...result])

            })
            .catch((error) => console.log("error", error));
    }
    const llamadosApi = () => {
        console.log(Object.values(stateFilters[0])[0])
        if (Object.values(stateFilters[0])[0] !== '' && Object.values(stateFilters[1])[0] === '' && Object.values(stateFilters[2])[0] === '') {

            console.log("buscar por id");

            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/product/findProductByIdCategory/" + Object.values(stateFilters[0])[0], requestOptions)
                .then(response => response.json())
                .then(result => {

                    if (Object.values(result)[1] === "No products have been found for the indicated id category.") {

                        console.log("entro al if de 400");
                        console.log(Object.values(result)[1] === "No products have been found for the indicated id category.")
                        setErrorCat(true)
                        restaFiltrer({ id: '' })
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'There is no result for your search. Please try another.!'
                        })
                    } else {
                        setFilterP([...result])
                        setFlagByCategory(true)
                    }
                })
                .catch(error => console.log('error', error));
        }
        if (Object.values(stateFilters[0])[0] === '' && Object.values(stateFilters[1])[0] !== '' && Object.values(stateFilters[2])[0] === '') {

            console.log("buscar por ciudad");
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/product/findByCity/" + Object.values(stateFilters[1])[0], requestOptions)
                .then(response => response.json())
                .then(result => {

                    if (Object.values(result)[1] === "No products have been found for the indicated city.") {
                        // console.log(Object.keys(stateFilters[1])[0]);
                        // console.log(Object.keys(filtroOut)[0]);
                        //   console.log(Object.keys(filtroOut)[0]===Object.keys(stateFilters[1])[0]);
                        console.log("entro al if de 400");
                        console.log(Object.values(result)[1] === "No products have been found for the indicated city.")
                        setCleanCity(true)
                        setErrorCity(true)
                        restaFiltrer({ nameCity: '' })
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'There is no result for your search. Please try another.!'
                        })

                    } else {
                        setFlagByNameCity(true)
                        setFilterP([...result])
                    }

                })
                .catch(error => console.log('Entró al error error', error));
        }
        if (Object.values(stateFilters[0])[0] === '' && Object.values(stateFilters[1])[0] === '' && Object.values(stateFilters[2])[0] !== '') {
            console.log("buscar por fechas");
            console.log(Object.values(stateFilters[2])[0]);
            console.log(Object.values(stateFilters[2])[1]);
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/product/findProductByDate/" + Object.values(stateFilters[2])[0] + "/" + Object.values(stateFilters[2])[1], requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    console.log(Object.values(result)[1])
                    if (Object.values(result)[1] === "No products have been found for the indicated dates.") {
                        setCleanCal(true)
                        setErrorDates(true)
                        restaFiltrer({ startDate: '', endDate: '' })
                        console.log("entro al if de 400");
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'There is no result for your search. Please try another.!'
                        })
                    } else {
                        let requestOptions = {
                            method: 'GET',
                            redirect: 'follow'
                        };
                        console.log(userName);
                        userName !== '' && fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/reservation/findReservationByUserName?userName=" + userName, requestOptions)
                            .then(response => response.json())
                            .then(result2 => {
                                //setProductReservation(result)
                                const lone = []
                                // const ldos=''
                                result2.forEach(e => {
                                    console.log(e.startDate);
                                    console.log(Object.values(stateFilters[2])[0]);
                                    if (e.startDate == Object.values(stateFilters[2])[0] && e.endDate == Object.values(stateFilters[2])[1]) {
                                        console.log(e);
                                        const ldos = result.filter(n => n.id !== e.product.id)
                                        //console.log(ldos);
                                        if (ldos.length === 0) {
                                            restaFiltrer({ startDate: '', endDate: '' })
                                            setErrorDates(true)
                                            setCleanCal(true)
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                text: 'There is no result for your search. Please try another.!'
                                            })
                                        } else {
                                            setFilterP([...ldos])
                                        }
                                    } else {
                                        setFilterP([...result])
                                    }
                                })
                                // result2.forEach(e=>{
                                //     ldos.push(result.filter(uno=>uno.id!==e.product.id))
                                // })
                                // result.forEach(u=>{
                                //     lone.push(result2.filter(d=>d.product.id!==u.id))
                                // })
                                // result.forEach(uno=>{
                                //     result2.forEach(dos=>{
                                //         if(uno.id!==dos.product.id){
                                //            lone.push(uno) 
                                //         }

                                //     })
                                // })
                                // console.log(ldos)
                            })
                            .catch(error => console.log('error', error));
                        console.log(result);
                        //setFilterP([...result])
                    }
                })
                .catch(error => console.log('error', error));

        }
        if (Object.values(stateFilters[0])[0] !== '' && Object.values(stateFilters[1])[0] !== '' && Object.values(stateFilters[2])[0] === '') {
            console.log("buscar por id y ciudad");

            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/product/findProductByIdCategoryAndCity?idCategory=" + Object.values(stateFilters[0])[0] + "&nameCity=" + Object.values(stateFilters[1])[0], requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(Object.values(result)[1])
                    console.log(Object.keys(filtroOut)[0])
                    console.log(Object.keys(filtroOut)[0] === "nameCity");
                    if (Object.values(result)[1] === "No products have been found for the indicated idCategory y nameCity.") {
                        // console.log(Object.keys(stateFilters[1])[0]);
                        // console.log(Object.keys(filtroOut)[0]);
                        //   console.log(Object.keys(filtroOut)[0]===Object.keys(stateFilters[1])[0]);
                        console.log("entro al if de 400");
                        //console.log(Object.values(result)[1]==="No products have been found for the indicated idCategory or nameCity..")
                        console.log(Object.keys(filtroOut)[0]);
                        if (Object.keys(filtroOut)[0] === "id") {
                            restaFiltrer({ id: '' })
                            setErrorCat(true)
                        }
                        if (Object.keys(filtroOut)[0] === "nameCity") {
                            restaFiltrer({ nameCity: '' })
                            setErrorCity(true)
                            setCleanCity(true)
                        }
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'There is no result for your search. Please try another.!'
                        })

                    } else {
                        setFilterP([...result])
                    }
                })
                .catch(error => console.log('error', error));
        }

        if (Object.values(stateFilters[0])[0] !== '' && Object.values(stateFilters[1])[0] === '' && Object.values(stateFilters[2])[0] !== '') {
            console.log("buscar por id y fechas");
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/product/findProductByIdCategoryAndDates?idCategory=" + Object.values(stateFilters[0])[0] + "&startDate=" + Object.values(stateFilters[2])[0] + "&endDate=" + Object.values(stateFilters[2])[1], requestOptions)
                .then(response => response.json())
                .then(result => {
                    //  console.log(Object.values(result)[1])
                    if (Object.values(result)[1] === "No products have been found for the indicated idCategory and dates.") {
                        // console.log(Object.keys(stateFilters[1])[0]);
                        // console.log(Object.keys(filtroOut)[0]);
                        //   console.log(Object.keys(filtroOut)[0]===Object.keys(stateFilters[1])[0]);
                        console.log("entro al if de 400");
                        console.log(Object.values(result)[1] === "No products have been found for the indicated idCategory or nameCity..")
                        if (Object.keys(filtroOut)[0] === "id") {
                            restaFiltrer({ id: '' })
                            setErrorCat(true)
                        }
                        if (Object.keys(filtroOut)[0][0] === "startDate") {
                            restaFiltrer({ startDate: '', endDate: '' })
                            setErrorDates(true)
                            setCleanCal(true)
                        }


                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'There is no result for your search. Please try another.!'
                        })

                    } else {
                        let requestOptions2 = {
                            method: 'GET',
                            redirect: 'follow'
                        };
                        console.log(userName);
                        userName !== '' && fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/reservation/findReservationByUserName?userName=" + userName, requestOptions2)
                            .then(response => response.json())
                            .then(result2 => {
                                //setProductReservation(result)
                                //const lone=[]
                                // const ldos=''
                                result2.forEach(e => {
                                    console.log(e.startDate);
                                    console.log(Object.values(stateFilters[2])[0]);
                                    if (e.startDate === Object.values(stateFilters[2])[0] && e.endDate === Object.values(stateFilters[2])[1]) {
                                        console.log(e);
                                        const ldos = result.filter(n => n.id !== e.product.id)
                                        console.log(ldos);
                                        if (ldos.length === 0) {
                                            restaFiltrer({ startDate: '', endDate: '' })
                                            setErrorDates(true)
                                            setCleanCal(true)
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                text: 'There is no result for your search. Please try another.!'
                                            })
                                        } else {
                                            setFilterP([...ldos])
                                        }
                                        //setFilterP([...ldos])
                                    } else {
                                        setFilterP([...result])
                                    }
                                })
                                // result2.forEach(e=>{
                                //     ldos.push(result.filter(uno=>uno.id!==e.product.id))
                                // })
                                // result.forEach(u=>{
                                //     lone.push(result2.filter(d=>d.product.id!==u.id))
                                // })
                                // result.forEach(uno=>{
                                //     result2.forEach(dos=>{
                                //         if(uno.id!==dos.product.id){
                                //            lone.push(uno) 
                                //         }

                                //     })
                                // })
                                // console.log(ldos)
                            })
                            .catch(error => console.log('error', error));
                        //setFilterP([...result])
                    }
                })
                .catch(error => console.log('error', error));

        }



        if (Object.values(stateFilters[0])[0] === '' && Object.values(stateFilters[1])[0] !== '' && Object.values(stateFilters[2])[0] !== '') {
            console.log("buscar por ciudad y fechas");
            console.log(Object.values(stateFilters[1])[0]);
            console.log(Object.values(stateFilters[2])[0]);
            console.log(Object.values(stateFilters[2])[1]);
            // console.log(Object.values(stateFilters[2])[0]);
            // console.log(Object.values(stateFilters[2])[1]);
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/product/findByCity/" + Object.values(stateFilters[1])[0], requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    // console.log(result.status);
                    if (Object.values(result)[1] === "No products have been found for the indicated city.") {

                        if (Object.keys(filtroOut)[0] === "nameCity") {
                            restaFiltrer({ nameCity: '' })
                            setErrorCity(true)
                            setCleanCity(true)
                        }
                        if (Object.keys(filtroOut)[0][0] === "startDate") {
                            restaFiltrer({ startDate: '', endDate: '' })
                            setErrorDates(true)
                            setCleanCal(true)
                        }


                        console.log("entro al if de 400");
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'There is no result for your search. Please try another.!'
                        })
                    } else {
                        let requestOptions = {
                            method: 'GET',
                            redirect: 'follow'
                        };
                        console.log(userName);
                        userName !== '' && fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/reservation/findReservationByUserName?userName=" + userName, requestOptions)
                            .then(response => response.json())
                            .then(result2 => {
                                //setProductReservation(result)
                                const lone = []
                                let ldoss = ''


                                console.log(result);
                                console.log(result2);
                                result2.forEach(e => {
                                    console.log(e.startDate);
                                    console.log(Object.values(stateFilters[2])[0]);
                                    if (e.startDate === Object.values(stateFilters[2])[0] && e.endDate === Object.values(stateFilters[2])[1]) {
                                        console.log(e);
                                        ldoss = result.filter(n => n.id !== e.product.id)
                                        console.log(ldoss);
                                        // setFilterP([...ldoss])
                                        if (ldoss.length === 0) {
                                            restaFiltrer({ startDate: '', endDate: '' })
                                            setErrorDates(true)
                                            setCleanCal(true)
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                text: 'There is no result for your search. Please try another.!'
                                            })
                                        } else {
                                            setFilterP([...ldoss])
                                        }

                                    } else {
                                        console.log("else 830");
                                        setFilterP([...result])
                                    }
                                })



                                // result2.forEach(e=>{
                                //     ldos.push(result.filter(uno=>uno.id!==e.product.id))
                                // })
                                // result.forEach(u=>{
                                //     lone.push(result2.filter(d=>d.product.id!==u.id))
                                // })
                                // result.forEach(uno=>{
                                //     result2.forEach(dos=>{
                                //         if(uno.id!==dos.product.id){
                                //            lone.push(uno) 
                                //         }

                                //     })
                                // })
                                // console.log(ldos)
                            })
                            .catch(error => console.log('error', error));
                        //setFilterP([...result])
                    }
                })
                .catch(error => console.log('error', error));
        }
        if (Object.values(stateFilters[0])[0] !== '' && Object.values(stateFilters[1])[0] !== '' && Object.values(stateFilters[2])[0] !== '') {

            //-------------------------------------------------------------------
            console.log("buscar por id y ciudad");

            let requestOptions1 = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/product/findProductByIdCategoryAndCity?idCategory=" + Object.values(stateFilters[0])[0] + "&nameCity=" + Object.values(stateFilters[1])[0], requestOptions1)
                .then(response => response.json())
                .then(result => {
                    console.log(Object.values(result)[1])
                    console.log(Object.keys(filtroOut)[0])
                    console.log(Object.keys(filtroOut)[0] === "nameCity");
                    if (Object.values(result)[1] === "No products have been found for the indicated idCategory y nameCity.") {
                        // console.log(Object.keys(stateFilters[1])[0]);
                        // console.log(Object.keys(filtroOut)[0]);
                        //   console.log(Object.keys(filtroOut)[0]===Object.keys(stateFilters[1])[0]);
                        console.log("entro al if de 400");
                        //console.log(Object.values(result)[1]==="No products have been found for the indicated idCategory or nameCity..")
                        console.log(Object.keys(filtroOut)[0]);
                        if (Object.keys(filtroOut)[0] === "id") {
                            restaFiltrer({ id: '' })
                            setErrorCat(true)
                        }
                        if (Object.keys(filtroOut)[0] === "nameCity") {
                            restaFiltrer({ nameCity: '' })
                            setErrorCity(true)
                            setCleanCity(true)
                        }
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'There is no result for your search. Please try another.!'
                        })

                    } else {
                        console.log("buscar por id y ciudad y fechas");
                        //----nuevo
                        let requestOptions = {
                            method: 'GET',
                            redirect: 'follow'
                        };
                        console.log(userName);
                        userName !== '' && fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/reservation/findReservationByUserName?userName=" + userName, requestOptions)
                            .then(response => response.json())
                            .then(result2 => {
                                //setProductReservation(result)
                                const lone = []
                                let ldoss = ''


                                console.log(result);
                                console.log(result2);
                                result2.forEach(e => {
                                    console.log(e.startDate);
                                    console.log(Object.values(stateFilters[2])[0]);
                                    if (e.startDate === Object.values(stateFilters[2])[0] && e.endDate === Object.values(stateFilters[2])[1]) {
                                        console.log(e);
                                        ldoss = result.filter(n => n.id !== e.product.id)
                                        console.log(ldoss);
                                        // setFilterP([...ldoss])
                                        if (ldoss.length === 0) {
                                            restaFiltrer({ startDate: '', endDate: '' })
                                            setErrorDates(true)
                                            setCleanCal(true)
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                text: 'There is no result for your search. Please try another.!'
                                            })
                                        } else {
                                            setFilterP([...ldoss])
                                        }

                                    } else {
                                        console.log("else 975");
                                        setFilterP([...result])
                                    }
                                })



                                // result2.forEach(e=>{
                                //     ldos.push(result.filter(uno=>uno.id!==e.product.id))
                                // })
                                // result.forEach(u=>{
                                //     lone.push(result2.filter(d=>d.product.id!==u.id))
                                // })
                                // result.forEach(uno=>{
                                //     result2.forEach(dos=>{
                                //         if(uno.id!==dos.product.id){
                                //            lone.push(uno) 
                                //         }

                                //     })
                                // })
                                // console.log(ldos)
                            })
                            .catch(error => console.log('error', error));
                        //----------
                        // let requestOptions = {
                        //     method: 'GET',
                        //     redirect: 'follow'
                        //   };

                        //   fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com//api/product/findProductByIdCategoryAndNameCityAndDates?idCategory="+Object.values(stateFilters[0])[0]+"&nameCity="+Object.values(stateFilters[1])[0]+"&startDate="+Object.values(stateFilters[2])[0]+"&endDate="+Object.values(stateFilters[2])[1], requestOptions)
                        //     .then(response => response.json())
                        //     .then(result2 => {
                        //         console.log(result2)
                        //         if(Object.values(result2)[1]==="No products have been found for the indicated idCategory, nameCity and dates."){
                        //             if(Object.keys(filtroOut)[0]==="id"){
                        //                 restaFiltrer({id:''})
                        //                 setErrorCat(true)
                        //                 console.log("1");
                        //             }
                        //             if(Object.keys(filtroOut)[0]==="nameCity"){
                        //                 restaFiltrer({nameCity:''})
                        //                 setErrorCity(true)
                        //                 setCleanCity(true)
                        //                 console.log("2");
                        //             }
                        //             if(Object.keys(filtroOut)[0]=="startDate"){
                        //                 restaFiltrer({startDate:'',endDate:''})
                        //                 setErrorDates(true)
                        //                 setCleanCal(true)
                        //                 console.log("3");
                        //             }
                        //             console.log(Object.keys(filtroOut)[0]);

                        //             console.log("entro al if de 400");
                        //             Swal.fire({
                        //               icon: 'error',
                        //               title: 'Oops...',
                        //               text: 'There is no result for your search. Please try another.!'
                        //             })
                        //           }else{
                        //               setFilterP([...result2])
                        //           }
                        //     })
                        //     .catch(error => console.log('error', error));
                    }
                })
                .catch(error => console.log('error', error));
            //-------------------------------------------------------------------

        }
        if (Object.values(stateFilters[0])[0] === '' && Object.values(stateFilters[1])[0] === '' && Object.values(stateFilters[2])[0] === '') {
            console.log("Mostrar todos");
            fetchCompleto();
        }
    }
    //------------------------------------------------------------------
    const addDataAllProducts = () => {
        fetchCompleto();
    }

    useEffect(() => addDataAllProducts(), [])

    //---------------------------------------------


    //------------productos con reservas--------
    const [idProductReservation, setIdProductReservation] = useState('')

    const [productReservation, setProductReservation] = useState([])
    const [countReservation, setCountReservation] = useState(0)
    useEffect(() => {
        const fReservationByUserName = () => {
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            userName !== '' && fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/reservation/findReservationByUserName?userName=" + userName, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setProductReservation([...result])
                    console.log(result)
                })
                .catch(error => console.log('error', error));
        }
        fReservationByUserName();
    }, [userName])
    useEffect(() => {
        const fReservationByUserName = () => {
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            userName !== '' && fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/reservation/findReservationByUserName?userName=" + userName, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setProductReservation([...result])
                    console.log(result)
                })
                .catch(error => console.log('error', error));
        }
        fReservationByUserName();
    }, [countReservation])
    // useEffect(()=>{
    //     const fReservationByIdProduct=()=>{
    //         let requestOptions = {
    //             method: 'GET',
    //             redirect: 'follow'
    //           };

    //           idProductReservation!==''&&fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com//reservation/findReservationByIdProduct?idProduct="+idProductReservation, requestOptions)
    //             .then(response => response.json())
    //             .then(result => {
    //                 setProductReservation(result)
    //                 console.log(result)
    //             })
    //             .catch(error => console.log('error', error));
    //     }
    //     fReservationByIdProduct();
    // },[idProductReservation])
    console.log(productReservation);
    //------------------------------------------
    //----------------booleano para manejar alerta en login-----
    const [boolReservation, setBoolReservation] = useState('')
    //----------------------------------------------------
    //------------datos para generar la reserva-----------
    const [datesTransferStart, setDatesTransferStart] = useState('')
    const [datesTransferEnd, setDatesTransferEnd] = useState('')
    const [extraDate, setExtraDate] = useState('')
    const [timeCheckin, setTimeCkeckin] = useState('')
    const [testCovid, setTestCovid] = useState('')
    const [nameR, setNameR] = useState('')
    const [lastnameR, setLastnameR] = useState('')
    const [emailR, setEmailR] = useState('')
    const [cityR, setCityR] = useState('')
    //const [idProductReservation,setProductReservation]=useState('')
    const [flagAllTrue, setFlagAllTrue] = useState('')
    const [countR, setCountR] = useState(0)
    const [boolLcal, setBoolLcal] = useState('')
    // if(idProductReservation!==''&&timeCheckin!==''&&datesTransferStart!==''&&datesTransferEnd!==''&&testCovid!==''&&extraDate!==''){
    //     setBoolLcal(true)
    // }
    // useEffect(()=>{
    //     // let myHeaders = new Headers();
    //     //     myHeaders.append("Content-Type", "application/json");
    //     // let raw = JSON.stringify({
    //     //     "startTime": timeCheckin,
    //     //     "startDate": datesTransferStart.toString(),
    //     //     "endDate": datesTransferEnd.toString(),
    //     //     "extraData": extraDate,
    //     //     "covidTest": testCovid,
    //     //     "product": {
    //     //       "id": idProductReservation
    //     //     }
    //     //   });


    //     //   let requestOptions = {
    //     //     method: 'POST',
    //     //     headers: myHeaders,
    //     //     body: raw,
    //     //     redirect: 'follow'
    //     //   };


    //     //     fetch("http://localhost:8080/api/reservation/save", requestOptions)
    //     //     .then(response => response.json())
    //     //     .then(result =>{
    //     //         console.log(result)
    //     //     })

    //     //     .catch(error => console.log('error', error));



    // },[flagAllTrue])
    //--------------------------------------------------------

    //----------------------solo fechas reseva------------------------------
    const [fechaReservaStart, setFechaReservaStart] = useState([])
    const [fechaReservaEnd, setFechaReservaEnd] = useState([])

    console.log('====================================');
    console.log(fechaReservaStart);
    console.log(fechaReservaEnd);

    //-----------------------------------------------------------------------

    //_-------vaciar calendario y ciudad-----------
    const [cleanCal, setCleanCal] = useState(false);
    const [cleanCity, setCleanCity] = useState(false);
    //console.log(cleanCal);
    //---------------------------------------------

    //---------------bool para el submit de reserva_----
    const [subBool, setsubBool] = useState(false);
    const [subBoolDos, setsubBoolDos] = useState(false);
    //---------------------------------------------------
        return(
            <ContextProduct.Provider
             value=
                {{
                    //---newProduct

                    cateAdmin, setCateAdmin,
                   nameAdmin, setNameAdmin,
                    addressAdmin, setAddressAdmin,
                    countryAdmin, setCountryAdmin,
                    cityAdmin, setCityAdmin,
                    numberAdmin, setNumberAdmin,
                    longitudeAdmin, setLongitudeAdmin,
                    latitudeAdmin, setLatitudeAdmin,
                    stateAdmin,setStateAdmin,
                    descriptionAdmin, setDescriptionAdmin,
                    urlAdmin,setUrlAdmin,
                    

                    housesRulesC, setHousesRulesC,
                    featureContext,setFeatureContext,
                    healthCareC, setHealthCareC,
                    cancellationPolicyC, setCancellationPolicyC,

                    //------------------
                    addProductToFavorite,
                    deleteProductToFavorite,

                setStateilters,

                productItem,
                filterP,
                sumaFiltrer,
                restaFiltrer,
                stateFilters,
                errorCat,
                errorCity,
                errorDates,

                setCityBlockSerch,
                cityBlockSerch,
                datesBlockSerch,
                setDatesBlockSerch,

                setIdProductReservation,
                idProductReservation,
                productReservation,
                setProductReservation,

                boolReservation,
                setBoolReservation,

                datesTransferStart,
                setDatesTransferStart,
                datesTransferEnd,
                setDatesTransferEnd,
                setTimeCkeckin,
                timeCheckin,
                setExtraDate,
                extraDate,
                setTestCovid,
                testCovid,
                nameR, setNameR,
                lastnameR, setLastnameR,
                emailR, setEmailR,
                cityR, setCityR,

                flagAllTrue,
                setFlagAllTrue,
                boolLcal,

                setCountR,


                fechaReservaStart, setFechaReservaStart,
                fechaReservaEnd, setFechaReservaEnd,


                flagByCategory, setFlagByCategory,
                flagByNameCity, setFlagByNameCity,


                cleanCal, setCleanCal,
                cleanCity, setCleanCity,

                userName, setUserName,


                subBool, setsubBool,
                subBoolDos, setsubBoolDos,

                idProductItem, setIdProductItem,

                idProductItemDelete, setIdProductItemDelete,
                boolDelFav, setBoolDelFav,
                boolSaveFav, setBoolSaveFav,

                countReservation, setCountReservation


            }}
        >
            {children}
        </ContextProduct.Provider>
    )

};
export default ProviderProduct;
