import React from "react";



function Note(props) {
  
  function Del(id) {
  for (let i = 0; i < props.noteArray.length; i++) {
    const element = props.noteArray[i];
    if (element.id == id) {
      props.setArray(props.noteArray.filter(item =>{
      return item.id !==id})
      );
    }
    
  }
 }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>{props.pnote}</p>
      <button type='button' onClick={()=> Del(props.id)}> DELETE </button>
    </div>
  );
}

export default Note;
