import React,{ useState} from 'react'
import FormImg from './FormImg'
import TaskImg from './TaskImg'
import '../../../styles/formAdmin/forth.css'

export default function ForthProduct() {

    const [list, setList] = useState([]);

    const handleAddItem = addItem => {
        setList([...list, addItem]);
     
      };
  return (
    <div className="containerFormClass">
    <h2 className="c h2"> Add Pictures </h2>
    <div className="containerImages">
      <FormImg handleAddItem={handleAddItem} list={list}/>
      <TaskImg list={list} setList={setList}/>
      </div>
  </div>
  )
}
