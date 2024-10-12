import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

  function App() {
   const [noteArray, setArray]= useState([]) 
   
   return (
    <div>
      
      <Header/>
    
      <CreateArea setArray={setArray}/>
        
      {noteArray.map((item)=>        
       <Note 
        key={item.id}
        id={item.id}
        title={item.note}
        content={item.content}                  
        noteArray={noteArray}
        setArray={setArray}/>)}
                  
          
    <Footer />
    </div>
  );
};

export default App;
