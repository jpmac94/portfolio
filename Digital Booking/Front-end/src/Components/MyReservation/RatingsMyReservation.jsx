import React, {useState, useEffect} from 'react'
import { GrStar } from 'react-icons/gr'
import Rating from 'react-rating'

export default function RatingsMyReservation({datosHeader}) {
    const [frase, setFrase] = useState("Good")
    const [fraseClick, setFraseClick] = useState(null)
    const [newRatingApi, setNewRatingApi] = useState(null)
    const [newRatingLocal, setNewRatingLocal] = useState(null)
    const [newValor, setNewValor] = useState(null)
    const [rt, setRt] = useState(null)
    const id = datosHeader.id

    const [ratingsApi, setRatingsApi] = useState(null)
    let count = 0;
    let prom = 0;

    const fRaings = () => {
        let requestOptions = {
          method: 'GET'
        };
    
        fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/rating/findRatingByIdProduct/" + id, requestOptions)
          .then(response => response.json())
          .then(result => {
            // console.log(result);
            setRatingsApi(result)
          })
          .catch(error => console.log('error', error));
      }
    
      useEffect(() => {
        if (id !== null) {
          fRaings()
        }
      }, [])
      //agregado---
       const labelingClick=(rc)=> {

          if (rc <= 0.5) {
            setFraseClick("bad-");
          }
          if (rc > 0.5 && rc < 2) {
            setFraseClick("Bad");
          }
          if (rc > 1 && rc <= 2) {
            setFraseClick("Ok");
          }
          if (rc > 2 && rc <= 3) {
            setFraseClick("Good");
          }
          if (rc > 3 && rc <= 4.5) {
            setFraseClick("Good+");
          }
          if (rc > 4.5) {
            setFraseClick("Excellent");
          }

      }
   const handleRatingClick=(rate)=>{
    console.log(rate);
    setNewRatingApi(rate);
    setRt(rate);
    console.log(rt);
    setNewRatingLocal(rt)
    labelingClick(rt)
   }
      //-----------
    
      const labeling = (rate) => {

        if (rate <= 0.5) {
          setFrase("Bad-");
        }
        if (rate > 0.5 && rate < 2) {
          setFrase("Bad");
        }
        if (rate > 1 && rate <= 2) {
          setFrase("Ok");
        }
        if (rate > 2 && rate <= 3) {
          setFrase("Good");
        }
        if (rate > 3 && rate <= 4.5) {
          setFrase("Good+");
        }
        if (rate > 4.5) {
          setFrase("Excellent");
        }
    
      }
      ratingsApi !== null && ratingsApi.map(e => count = count + parseInt(e.rating))
      ratingsApi !== null && (prom = parseInt(Math.round(count / ratingsApi.length)));

      // useEffect(()=>{
      //   if(ratingsApi !== null ){
      //     ratingsApi.map(e => count = count + parseInt(e.rating))
      //     prom = parseInt(Math.round(count / ratingsApi.length))
      //   } 
      
      // },[ratingsApi])
 
      //---agregado---
      

  const fNewRatingApi=()=>{
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // console.log(newRatingApi);
    // console.log(id);
    let raw = JSON.stringify({
      "rating": newRatingApi,
      "product": {
        "id": id
      }
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    newRatingApi!==undefined&&id!==undefined&&fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/rating/save", requestOptions)
      .then(response => response.json())
      .then(result =>{
        console.log(result);
        setNewValor(result)
      } )
      .catch(error => console.log('error', error));
  }
  newRatingApi!==null&&fNewRatingApi();
  // newValor!==null&&fRaings();

 useEffect(()=>{
  if(newRatingApi!==null){
    // console.log(newRatingApi);
        setNewRatingApi(null)
    };
    fRaings()
 },[newValor])

  //--------------
 
      useEffect(() => {
        if (prom !== 0) {
          labeling(prom)
        }
        // labelingC(promC)
      }, [ratingsApi])
 
 
 
 
      return (
        <>
        <div className='container-rating-jsx'>
          <div className='rating'>
            <p >{fraseClick!==null?fraseClick:frase}</p>
            {/* <p >{frase}</p> */}
  
            <Rating
              emptySymbol={
                <GrStar style={{ color: "#aaa" }} />
              }
              fullSymbol={
                <GrStar style={{ color: "#1dbeb4" }} />
              }
              placeholderSymbol={
                <GrStar style={{ color: "#1dbeb4" }} />
              }
  
              placeholderRating={newRatingLocal!==null?newRatingLocal:prom}
              // placeholderRating={prom}
              fractions={2}
              onClick={handleRatingClick}
              onChange={rate => handleRatingClick(rate)}
              onHover={rate =>
                labeling(rate)
              }
              //readonly
            />
  
          </div>
  
          <div className="rating-number" >
            <p> {prom * 2}</p>
          </div>
        </div>
  
      </>
  )
}
