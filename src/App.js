import React, { useEffect, useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {

/*eklenen not kağıtlarının sayfada kalıcı olması için */ 
const [notes, setNotes] = useState(
  JSON.parse(localStorage.getItem('note-app')) || []
);



/* not kağıdı oluşturma/ekleme kısmı*/ 
const addNote=(color) => {
  const tempNotes=[...notes];

  tempNotes.push({
    id:Date.now() + ""+Math.floor(Math.random()*78),
    text:"",
    time:Date.now(),
    color,
  });
  setNotes(tempNotes);
};
/* not kağıdını silme işlemi */ 
  const deleteNote = (id) => {
    const tempNotes=[...notes];

    const index = tempNotes.findIndex((item) => item.id===id);
    if(index<0) return;
    
    /*silinebilirlik özellik sağlamak için splice */
    tempNotes.splice(index,1);
    setNotes(tempNotes);
  };


 /*yazılan notları kayıt etmek için, silinmemesi için (sayfa yenilendiğinde) */ 
  const updateText = (text, id) => {
    const tempNotes=[...notes];

    const index = tempNotes.findIndex((item) => item.id===id);
    if(index<0) return;

    tempNotes[index].text= text;
    setNotes(tempNotes);
  };

  /*eklenen not kağıtlarının sayfada kalıcı olması için */ 
  useEffect(() => {
    localStorage.setItem("note-app", JSON.stringify(notes))
  }, [notes])

  return (
    <div className="App" >
      <Sidebar addNote={addNote} />
      <NoteContainer 
        notes={notes} 
        deleteNote={deleteNote} 
        updateText={updateText} 
      />
    </div>
  );
}

export default App;