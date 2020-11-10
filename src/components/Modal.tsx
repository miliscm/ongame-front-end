import React, { useState } from 'react'
import "../styles/components/modal.css"
import api from "../services/api"
import axios from 'axios';

interface ModalInfo{
  id:number,
  name:string,
  image:string,
  classe: string
}

const Modal = (props: ModalInfo) => {
const redeem = props.id;


function handleClickYes(){  

  console.log(redeem)
 
  
  api.post(`item/redeem/`,{"item_id":redeem})
  .then((response) => {        
    console.log(
      `Data has been sent to the server`
    );    
  })
  .catch((err) => {
    console.error(
      `Server internal error`
    );
    console.log(err); 
})
}



  return (
    <div className={`modal-secound ${props.classe}`}>
      <div className="modal-card">
        <h2>Deseja resgatar?</h2>
        <img src={props.image} alt=""/>
        <h3>{props.name}</h3>
        <div className="btn-modal">
          <button onClick={handleClickYes} className="yes">Sim</button>
          <button className="no">Não</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
