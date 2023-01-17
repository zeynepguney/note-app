import React, { useState } from 'react';

import plusIcon from '../assets/plus.png';
import './Sidebar.css';
 /*en soldaki not ekleme ve not kağıdı rengi seçme işlemleri için kullanılan alan ile ilgili işlemler bu kısımda gerçekleşiyor */
function Sidebar(props) {
  /* not kağıdı renkleri */
  const colors = ["lightseagreen", "seagreen", "burlywood", "firebrick", "chocolate"];

  /*react hook kütüphanesi özelliklerinden usestate ile state değişkenimizi varsayılan olarak false atıyoruz
  plus ikonuna 'tıklandığında' renk listesinin açılması için  */ 
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className='sidebar'>
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen?"sidebar_list_active":""}`}>
        {colors.map((item, index) => (
          <li 
            key={index}
            className='sidebar_list_item' 
            style={{backgroundColor:item}}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;