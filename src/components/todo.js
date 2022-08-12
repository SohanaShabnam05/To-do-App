import React, { useState } from 'react';
import todo from "../images/todo.png";
import './todo.css';

function Todo () {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {

        if(!inputData) {
            alert('Please fill data');
        }else if (inputData && !toggleSubmit){
                setItems (
                    items.map = (elem) => {
                            if(elem.id === isEditItem){
                                return{ ...elem, name: inputData}
                            }
                            return elem;
                    }
                )
                setToggleSubmit(true);

                setInputData('');
        
                setIsEditItem(null);
        }
        else{
            const allInputData = { id: new Date().getTime().toString(), name:inputData }
            setItems([...items, allInputData]);
            setInputData('');
        }
           
    }

    // Delete the items
    const deleteItem = (index) => {
        const updateditems = items.filter((elem) => {
            return index !== elem.id;
        });

        setItems(updateditems);
    }

    //Edit-Item

    const editItem = (id) => {
        let newEditItem = items.find((elem) => {

            return elem.id === id;
        });
        console.log(newEditItem);

        setToggleSubmit(false);

        setInputData(newEditItem.name);

        setIsEditItem(id);
    }

    // remove all
    const removeAll = () => {
        setItems([]);
    }
  return (
    <>
      <div className="main-div">

        <div className="child-div">
            <figure>
                <img src={todo} alt="todo logo" />
                <figcaption>Add your list here</figcaption>             
            </figure>

            <div className="addItems">
                <input 
                type="text" 
                placeholder="✍️ Add Items..." 
                value={inputData}
                onChange={(e) => setInputData(e.target.value) }
                ></input>
                {
                    toggleSubmit ?  <i className="fa-solid fa-plus add-btn" title="Add Item" onClick={addItem}></i> : <i className="far fa-edit add-btn" title="Edit Item" onClick={addItem}></i>

                }
            </div>
                


            <div className="showItems">

                {
                    items.map((elem) => {
                        return (
                           <div className="eachItem" key={elem.id}>

                    <h3>{elem.name}</h3>
                    <div className="todo-btn">

                         <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}></i>
                         <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}></i>

                </div>
                </div>
                        )
                    })
                }
                
            </div>

        {/* Clear All Button */}
            <div className='showItems'>
                <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}> <span>CHECK LIST</span></button>
            </div>

        </div>

      </div>
    </>
  )
}



export default Todo;
