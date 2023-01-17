import React from "react";
import './Note.css';
import deleteIcon from '../assets/delete-24.png';

let timer = 500,timeout;

function Note(props) {
  /*eklenen notun oluşturuma saati ve tarihi */
  const formatDate = (value) => {
    if(!value) return ""

    const date= new Date(value);
    const aylar=[
      "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];

    /*oluşturulma saati */
    let saat = date.getHours();
    /* oluşturulma dakika */ 
    let dakika = date.getMinutes();
    dakika = dakika<10?"0"+dakika:dakika;
    /* oluşturulma günü*/
    let gun = date.getDate();
    /* oluşturulma ayı*/
    const ay = aylar[date.getMonth()];
    /* oluşturulma yılı*/
    let yil = date.getFullYear();

    /* tarih saat çıktı döndürmek için */ 
    return `${saat}:${dakika} ${gun} ${ay} ${yil}`;
  };

  /* zaman aşımı süresi */
  const sinirlama = (func) => {
    clearTimeout(timeout);
    timeout=setTimeout(func, timer);
  };
  /*  */
  const updateText = (text, id) => {
    sinirlama(() => props.updateText(text, id));
  };

/*textarea : not kağıdının not yazma alanı */

  return (
    <div className="note" style={{backgroundColor:props.note.color}}>
        <textarea className="note_text" 
        defaultValue={props.note.text} 
        onChange={(event) => updateText(event.target.value, props.note.id)} /*text kısmındaki değişikliğin kalıcı olması  */
        /> 
        <div className="note_footer" /*nottaki footer ın tanımlanması*/>
          <p>{formatDate(props.note.time) /*alt bilgide tarih gösterimi tanımlanması */}</p>
          <img 
            src={deleteIcon} /*footer da silme ikonunun tanımlanması */ 
            alt="Delete" 
            onClick={() => props.deleteNote(props.note.id)} 
          />
        </div>
    </div>
  );
}

export default Note;