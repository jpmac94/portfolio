import React, { useEffect, useState } from "react"
import { GrStar } from "react-icons/gr"
import Rating from "react-rating"
//import { useParams } from "react-router-dom"

const RatingCard = (props) => {
    const [fraseC,setFraseC]=useState("")
  const [fraseClickC,setFraseClickC]=useState(null)
  const [ratingsApiC,setRatingsApiC]=useState(null)
  const [newRatingApiC,setNewRatingApiC]=useState(null)
  const [newRatingLocalC, setNewRatingLocalC]=useState(null)
  const [newValorC,setNewValorC]=useState(null)
//    console.log(props.id);
  let countC=0;
  let promC=0;
  
  const fRaingsC=()=>{
    let requestOptions = {
      method: 'GET'
    };
    
    fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/rating/findRatingByIdProduct/"+props.id, requestOptions)
      .then(response => response.json())
      .then(result =>{ 
        //console.log(result);
        setRatingsApiC([...result])})
      .catch(error => console.log('error', error));
  }
  const labelingC=(rate)=> {
    
    if (rate <= 0.5) {
      setFraseC("bad-");
    }
    if (rate > 0.5 && rate < 2) {
      setFraseC("Bad");
    }
    if (rate > 1 && rate <= 2) {
      setFraseC("Ok");
    }
    if (rate > 2 && rate <= 3) {
      setFraseC("Good");
    }
    if (rate > 3 && rate <= 4.5) {
      setFraseC("Good+");
    }
    if (rate > 4.5) {
      setFraseC("Excellent");
    }
    
  }
  useEffect(()=>{
    if(props!==null){
      fRaingsC()
      // labelingC(promC)
    }
    
  },[])
  useEffect(()=>{
    if(promC!==0){
      labelingC(promC)
    }
    // labelingC(promC)
  },[ratingsApiC])
  
  // const labelingClickC=(rc)=> {
    
  //   if (rc <= 0.5) {
  //     setFraseClickC("bad-");
  //   }
  //   if (rc > 0.5 && rc < 2) {
  //     setFraseClickC("Bad");
  //   }
  //   if (rc > 1 && rc <= 2) {
  //     setFraseClickC("Ok");
  //   }
  //   if (rc > 2 && rc <= 3) {
  //     setFraseClickC("Good");
  //   }
  //   if (rc > 3 && rc <= 4.5) {
  //     setFraseClickC("Good+");
  //   }
  //   if (rc > 4.5) {
  //     setFraseClickC("Excellent");
  //   }
    
  // }
//  const handleRatingClickC=(rate)=>{
//   // setNewRatingApiC(rate);
//   const rt=rate;
//   setNewRatingLocalC(rt)
//   labelingClickC(rate)
//  }
 
  
  
  ratingsApiC!==null&&ratingsApiC.map(e=>countC=countC+parseInt(e.rating))
  ratingsApiC!==null&&(promC=parseInt(Math.round(countC/ratingsApiC.length)));
  // if(newRatingApiC!==null){
  //   // console.log(newRatingApi);
  //   setNewRatingApiC(null)
  // };

  // const fNewRatingApiC=()=>{
  //   let myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   let raw = JSON.stringify({
  //     "rating": newRatingApiC,
  //     "product": {
  //       "id": 1
  //     }
  //   });

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   fetch("http://grupo7-env.eba-4j7whm4m.us-west-1.elasticbeanstalk.com/api/rating/save", requestOptions)
  //     .then(response => response.json())
  //     .then(result => setNewValorC(result))
  //     .catch(error => console.log('error', error));
  // }
  // newRatingApiC!==null&&fNewRatingApiC();
  
    return ( 
        <div className="puntuacion">
            <div>
                <p className="category">
                    {props.category.title}
                    <Rating
                    emptySymbol={
                        <GrStar  style={{ color: "#aaa" }} />
                    }
                    fullSymbol={
                        <GrStar  style={{ color: "#1dbeb4" }} />
                    }
                    placeholderSymbol={
                        <GrStar  style={{ color: "#1dbeb4" }} />
                    }
                    placeholderRating={promC}
                    readonly
                    // placeholderRating={newRatingLocalC!==null?newRatingLocalC:promC}
                    // fractions={2}
                    // onClick={handleRatingClickC}
                    // onChange={rate => handleRatingClick(rate)}
                    // onHover={rate =>
                    //     labelingC(rate)
                    // }
                    />
                  </p>

                  <h2 className="title">{props.name}</h2>
                </div>
                <div className="puntuacion2">
                  <p className="numbre"> {promC*2} </p>
                  <p className="raitng">{fraseC}</p>
                </div>
              </div>
     );
}
 
export default RatingCard;