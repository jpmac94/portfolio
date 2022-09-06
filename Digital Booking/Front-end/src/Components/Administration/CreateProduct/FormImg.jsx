import React, { useContext, useEffect, useState } from 'react'
import { ContextProduct } from '../../Context/ContextProduct';

function FormImg(props) {
  const { handleAddItem } = props;
  const { list, setList } = props;
  const [description, setDescription] = useState("");


  const { setUrlAdmin
  } = useContext(ContextProduct)

  useEffect(() => {

    setUrlAdmin(list)
    console.log("setUrlAdmin", + list)
  }, [list])



  const handleSubmit = e => {
    e.preventDefault();

    //de este se manda el nuevo registro viene por props
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
  

      original: description,
      thumbnail: description
    });
    console.log(description)
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="todo-list">
        <div className="file-input">
          {list.length < 5 ? (
            <>
              <input
                type="text"
                className="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />

              <button
                className="Bpink"
                disabled={description ? "" : "disabled"}
              >
                Add
              </button>
            </>
          ) :
            <span className="text-limit"> You can only charge 5 photos </span>}
        </div>

      </div>
    </form>

  );
};

export default FormImg