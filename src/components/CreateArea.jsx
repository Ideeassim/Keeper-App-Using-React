import React, {useState} from "react";

function CreateArea(props) {
  const [titleValue, setTitle] = useState('');
  const [contentValue, setContent]= useState('')
  function titleHandler(event) {
    
    const value = event.target.value;

    return(setTitle( value)) 
  }

function contentHandler(event){
  const value= event.target.value;
  return setContent(value)
}


function addNote() {
  if(titleValue !=='' || contentValue !=='' ) {
    props.setArray(prevValue =>[...prevValue,
     {id:Date.now() , note:titleValue, content:contentValue}])
    } 
   setTitle('')
   setContent('')
  }
   
  return (
    <div>
      <form>
        <input
          onChange={titleHandler}
          name="title"
          placeholder="Title"
          value={titleValue}
        />
        <textarea
          onChange={contentHandler}
          name="content"
          placeholder="Take a note..."
          value={contentValue}
          rows="3"
        />
        <button type="button" onClick={() => addNote(titleValue)}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
