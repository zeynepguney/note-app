import React from 'react';
import Note from '../Note/Note';
import './NoteContainer.css';

/*normal dizi kullanıldığı için sona ekleme yapıyordu
reverse metodu ile terse çevirme işlemi uygulandı
oluşturulan her yeni not başa ekleniyor */
function NoteContainer(props) {

    const reverArray=(arr) => {
        const array = [];

        for(let i=arr.length -1; i >= 0; --i){
            array.push(arr[i]);
        }
        return array;
    };

    const notes = reverArray(props.notes);

/*not ekli mi değil mi kontrol edecek
ekli değil ise not yok yazısı gösterecek ekranda
ekli ise zaten not kağıtları görünüyor olacak */
    return (
    <div className='note-container'>
        <h2>Yapışkan Notlar</h2> 
        <div className='note-container_Notes custom-scroll'>
            {notes?.length>0 ?(
                notes.map((item) => (
                    <Note key= {item.id} note={item} 
                    deleteNote={props.deleteNote}
                    updateText={props.updateText}
                />
            ))
        ) : (
            <h3>Not Yok</h3>
            )}

        </div>
    </div>
  );
  
}

export default NoteContainer;