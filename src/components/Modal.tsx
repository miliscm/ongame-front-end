import React from 'react'
import "../styles/components/modal.css"
import api from "../services/api"


interface ModalInfo{
  id:number,
  name:string,
  image:string,
  classe: string,
  disableClasse: any;
}

const Modal = (props: ModalInfo) => {
const redeem = JSON.stringify({item_id:props.id});

let classeFather = props.classe;
console.log(classeFather);

function handleClickYes(){  
  // document.querySelector(".open")?.classList.remove("open");
  props.disableClasse();
  api.post(`item/redeem/`,{redeem})
  .then((response) => {        
    console.log(
      `Data has been sent to the server`
      
    );    
  })
  .catch((err) => {
    console.error(
      `Server internal error ${redeem}`
    );
    console.log(err); 
})
}



  return (
    <div id="teste" className={`modal-second ${classeFather}`}>
      <div className="modal-card">
        <h2>Deseja resgatar?</h2>
        <img src={props.image} alt=""/>
        <h3>{props.name}</h3>
        <div className="btn-modal">
          <button onClick={handleClickYes} className="yes">Sim</button>
          <button onClick={props.disableClasse} className="no">Não</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
