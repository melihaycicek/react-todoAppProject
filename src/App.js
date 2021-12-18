
import './App.css';
import React, {useEffect, useState, } from 'react';
import TodoItem from './components/todoItem';


function App() {
  const [todoItems, setTodoItems] = useState(null);


  useEffect(( ) => {
    console.log("Hey WAHTSAUP");
if(!todoItems){
  fetch('http://localhost:8080/api/todoItems')
  .then((response) => response.json())
  .then((data)=>{
    console.log("Todo items list:" , data);
    setTodoItems(data);
  }); 
}
  
}, [todoItems]);



function addNewTodoItem(){
    
fetch('http://localhost:8080/api/todoItems', {

headers: {
'content-type': 'application/json'

},
method:'POST',
}).then(response => response.json())
.then( (aTodoItem) => {
 
  
  setTodoItems ([...todoItems, aTodoItem]);
});
}
    function handleDeleteTodoItem(item){
     const updatedTodoItems =  todoItems.filter(
       (aTodoItem) => aTodoItem.id !== item.id
       );
      setTodoItems([...updatedTodoItems]);
    }
  return ( 
    <>
    <div>
    <button onClick={addNewTodoItem}>Add New Item </button>

    </div>
    <div>
     {todoItems 
     ? todoItems.map((todoItem) => { 
        return (  
        <TodoItem 
        key={todoItem.id} 
        
        data = {todoItem} 

        emitDeleteTodoItem ={handleDelete0TodoItem}
        />
        );
       })
       :"loading data"}
      </div>
      </>
   );
}

export default App;
