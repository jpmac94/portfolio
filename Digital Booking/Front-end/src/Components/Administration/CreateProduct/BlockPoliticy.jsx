import React,{ useState} from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { ContextProduct } from '../../Context/ContextProduct';

export default function BlockPolicity(props) {
  const [housesRulesL, setHousesRulesL] = useState({ field: "", valid: null });

  const { setHousesRulesC,setHealthCareC,setCancellationPolicyC}=useContext(ContextProduct)
  const expressions = {
    description:/^[a-zA-ZÀ-ÿ\s]{1,40}$/
  };
  const onChangeDescription = ({ currentTarget }) => 
  setHousesRulesL({ ...housesRulesL, field: currentTarget.value });

  // const validatorDescription = () => {
  //   if (expressions.description.test(housesRulesL.field)) {
  //     setHousesRulesL ({ ...housesRulesL, valid: false });
  //   } else {
  //       setHousesRulesL({ ...housesRulesL, valid: true });
  //   }
  // };
  useEffect(()=>{

    console.log(housesRulesL);
    if(props.titulo==="House's rules"){
      setHousesRulesC(housesRulesL)
    }
    if(props.titulo==="Health and Care"){
      setHealthCareC(housesRulesL)
    }
    
    if(props.titulo==="Cancellation Policy"){
      setCancellationPolicyC(housesRulesL)
    }
    
   

  },[housesRulesL])

  return (
    <div className="block-policy">
        <h3 className='h3Block'>{props.titulo}</h3>
        <div>
            <h4 className='h4Block'>Description</h4>
         

            <textarea  className={housesRulesL.valid === true ? "controlsInvalid textarea" : "controls textarea"} onChange={onChangeDescription}   name="description" id="description" cols="20" rows="15" placeholder="Write here..."></textarea>
        {housesRulesL.valid === true ? (
          <span className="incorect e">Required field</span>
        ) : (
          ""
        )}
           
        </div>
    </div>
  )
}
