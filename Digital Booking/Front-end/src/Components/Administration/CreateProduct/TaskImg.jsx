import React from "react";
import Checkbox from "./Checkbox";

// recorrer list con map, para generar “n” 
  // componentes de Checkbox
export default function TaskImg(props) {
  const { list, setList } = props;
  //   recibir de props  , 
  

  //recibe datos del checkbox que haya cambiado
  const onChangeStatus = e => {
    const { name, checked } = e.target;

//recorremos la lista y cambiamos los que cambian
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
  };


  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    console.log(updateList)
    setList(updateList);
  };
  

  const chk = list.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="todo-list">
  
      {list.length ? chk : <span className="text-limit">No photos was uploaded</span>}
    
      {list.length ? (
        <p>
          <button className="Bblue" onClick={onClickRemoveItem}>
            Delete all done
          </button>
        </p>
      ) : null}
    </div>
  );
};
