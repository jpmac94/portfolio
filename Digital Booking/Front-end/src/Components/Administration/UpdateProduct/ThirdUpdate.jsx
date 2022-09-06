// import React, { useState } from 'react'
// import { useEffect } from 'react';

// import { AiOutlineClose } from "react-icons/ai";
// import { MdAdd } from "react-icons/md";

// export default function ThirdUpdate({ product }) {
//     const productUpdate = product[0];

//     const arrayHouse = productUpdate.house_rules.split('-');
//     const arrayHealth = productUpdate.health_care.split('-');
//     const arrayCancellation = productUpdate.cancellation_policy.split('-');
//     /*house*/
//     const [cont, setCont] = useState()
//     useEffect(() => {
//         setCont(0)
//     }, [])
//     console.log(arrayHouse)
//     const [inputHouse, setInputHouse] = useState([
//         arrayHouse.map((desc, index) => (
//             {
//              id: index, houseDescription: desc }
//         ))

//     ]);
//     console.log(inputHouse)

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("InputFields", inputHouse);
// };

// const handleChangeInput = (id, event) => {
//     const newInputHouse = inputHouse.map(i => {
//         if (id === i.id) {
//             i[event.target.name] = event.target.value
//         }
//         return i;
//     })

//     setInputHouse(newInputHouse);
// }

// const handleAddFields = () => {
//     setInputHouse([...inputHouse, { id: cont, houseDescription: '' }])
//     setCont(cont + 1)
// }

// const handleRemoveFields = id => {
//     const values = [...inputHouse];
//     values.splice(values.findIndex(value => value.id === id), 1);
//     setInputHouse(values);
// }

// /*Health*/
// const [cont1, setCont1] = useState()
// useEffect(() => {
//     setCont1(0)
// }, [])

// const [inputHealth, setInputHealth] = useState([
//     { id: cont1, healthDescription: '' },

// ]);

// const handleSubmitHealth = (e) => {
//     e.preventDefault();
//     console.log("InputFields", inputHealth);
// };

// const handleChangeInputHealth = (id, event) => {
//     const newInputHealth = inputHealth.map(i => {
//         if (id === i.id) {
//             i[event.target.name] = event.target.value
//         }
//         return i;
//     })

//     setInputHealth(newInputHealth);
// }

// const handleAddFieldsHealth = () => {

//     setInputHealth([...inputHealth, { id: cont1, healthDescription: '' }])
//     setCont1(cont1 + 1)
//     console.log("InputFields", inputHealth);
// }

// const handleRemoveFieldsHeatlth = id => {
//     const values = [...inputHealth];
//     values.splice(values.findIndex(value => value.id === id), 1);
//     setInputHealth(values);
//     console.log("InputFields", inputHealth);
// }

// /*Cancellation*/
// const [cont2, setCont2] = useState()
// useEffect(() => {
//     setCont2(0)
// }, [])

// const [inputCancellation, setInputCancellation] = useState([
//     { id: cont2, cancellationDescription: '' },

// ]);

// const handleSubmitCancellation = (e) => {
//     e.preventDefault();
//     console.log("InputFields", inputCancellation);
// };

// const handleChangeInputCancellation = (id, event) => {
//     const newInputCancellation = inputCancellation.map(i => {
//         if (id === i.id) {
//             i[event.target.name] = event.target.value
//         }
//         return i;
//     })

//     setInputCancellation(newInputCancellation);
// }

// const handleAddFieldsCancellation = () => {
//     setInputCancellation([...inputCancellation, { id: cont2, cancellationDescription: '' }])
//     setCont2(cont2 + 1)
//     console.log("InputFields", inputCancellation);
// }

// const handleRemoveFieldsCancellation = id => {
//     const values = [...inputCancellation];
//     values.splice(values.findIndex(value => value.id === id), 1);
//     setInputCancellation(values);
//     console.log("InputFields", inputCancellation);
// }


// // return (

// // //     <>
// // //         <div className='container-description-update'>
// // //             <h2 className="c h2"> Update Description </h2>

// // //             <div className='descriptions-update'>
// // //                 <div className='block-description-update'>
// // //                     {/*<form className={classes.root} onSubmit={handleSubmit}>*/}
// // //                     <label htmlFor=""><h3 className="">House's rules</h3></label>
// // //                     {inputHouse.map((inputField, i) => (
// // //                         <div className='inp' key={inputField.id}>
// // //                             <input
// // //                                 className='input-update'
// // //                                 name="houseDescription"
// // //                                 // label="First Name"
// // //                                 variant="filled"
// // //                                 placeholder={inputField.houseDescription}
// // //                                 value={inputField.houseDescription}
// // //                                 onChange={event => handleChangeInput(inputField.id, event)}
// // //                             />
// // //                             <div className='buttons-add-delete-update'>
// // //                                 <button className='delete-description-update' disabled={inputHouse.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
// // //                                     <AiOutlineClose />
// // //                                 </button>
// // //                                 <button
// // //                                     className='add-description-update'
// // //                                     onClick={handleAddFields}
// // //                                 >
// // //                                     <MdAdd />
// // //                                 </button>
// // //                             </div>

// // //                         </div>
// // //                     ))}
// // //                     <button
// // //                         className='ready-description-update'
// // //                         variant="contained"
// // //                         color="primary"
// // //                         type="submit"
// // //                         endIcon={'send'}
// // //                         onClick={handleSubmit}
// // //                     >Ready</button>
// // //                     {/* </form>*/}
// // //                 </div>


// // //                 <div className='block-description-update'>
// // //                     {/*} <form className={classes.root} onSubmit={handleSubmitHealth}>*/}
// // //                     <label htmlFor=""><h3 className="">Health and Care</h3></label>
// // //                     {inputHealth.map(inputField => (
// // //                         <div className='inp' key={inputField.id}>
// // //                             <input
// // //                                 className='input-update'
// // //                                 name="healthDescription"
// // //                                 label="First Name"
// // //                                 variant="filled"
// // //                                 value={inputField.healthDescription}
// // //                                 onChange={event => handleChangeInputHealth(inputField.id, event)}
// // //                             />
// // //                             <div className='buttons-add-delete-update'>
// // //                                 <button className='delete-description-update' disabled={inputHealth.length === 1} onClick={() => handleRemoveFieldsHeatlth(inputField.id)}>
// // //                                     <AiOutlineClose />
// // //                                 </button>
// // //                                 <button
// // //                                     className='add-description-update'
// // //                                     onClick={handleAddFieldsHealth}
// // //                                 >
// // //                                     <MdAdd />
// // //                                 </button>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                     <button
// // //                         className='ready-description-update'
// // //                         variant="contained"
// // //                         color="primary"
// // //                         type="submit"
// // //                         endIcon={'send'}
// // //                         onClick={handleSubmitHealth}
// // //                     >Ready</button>
// // //                     {/*  </form>*/}

// // //                 </div>
// // //                 <div className='block-description-update'>
// // //                     <label htmlFor=""><h3 className="">Cancellation Policy</h3></label>
// // //                     {inputCancellation.map(inputField => (
// // //                         <div className='inp' key={inputField.id}>
// // //                             <input
// // //                                 className='input-update'
// // //                                 name="CaaancellationDescription"
// // //                                 label="First Name"
// // //                                 variant="filled"
// // //                                 value={inputCancellation.cancellationDescription}
// // //                                 onChange={event => handleChangeInputCancellation(inputCancellation.id, event)}
// // //                             />
// // //                             <div className='buttons-add-delete-update'>
// // //                                 <button className='delete-description-update' disabled={inputCancellation.length === 1} onClick={() => handleRemoveFieldsCancellation(inputField.id)}>
// // //                                     <AiOutlineClose />
// // //                                 </button>
// // //                                 <button
// // //                                     className='add-description-update'
// // //                                     onClick={handleAddFieldsCancellation}
// // //                                 >
// // //                                     <MdAdd />
// // //                                 </button>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                     <button
// // //                         className='ready-description-update'
// // //                         variant="contained"
// // //                         color="primary"
// // //                         type="submit"
// // //                         endIcon={'send'}
// // //                         onClick={handleSubmitCancellation}
// // //                     >Ready</button>
// // //                     {/*  </form>*/}

// // //                 </div>

// // //             </div>

// // //         </div>
// // //     </>


// // // )
// // }
