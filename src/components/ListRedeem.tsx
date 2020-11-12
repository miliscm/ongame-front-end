import React,{useState} from 'react'
import {FaCheck} from "react-icons/fa"
import Modal from "../components/Modal"

interface itemsData{
  id:number,
  image: string,
  name: string,
  percentage: number,
  redeemed: boolean,
}

const ListRedeem: React.FC<itemsData> = (props) => {
  const [nameSelected,setNameSelected]=useState("")
  const [imageSelected,setImageSelected]=useState("")
  const redeembleStyle = {border:"none", color:" #fff"}

  
  const [id,setId]=useState(0);
  const [classe,setClasse]=useState("");
  function handleRedeemed(id:number,name:string, redeemed: boolean, percentage:number, image:string){    
    if(redeemed){
      return(
        <button disabled style={redeembleStyle}>
          <FaCheck 
          color={"#FE0202"}
          size="18px"                  
          />
          <strong>Item Resgatado</strong>
          </button>
      )
    }else if(percentage < 100){

      return(<button disabled>Resgatar</button> )
    }
    else{
     
      return(
      <button       
      onClick={()=>{
        handleClick(id,name,image)
        
      }} 
      className={"true"}
      >
        Resgatar        
        </button> )
    }

  }
  function handleClick(id:number,name:string,image:string){
    setId(id);
    setNameSelected(name);
    setImageSelected(image);  
    setClasse("open");
}
  return (
    <>
      <img src={props.image} alt=""/>               
                <div className="content"> 
                    <div>
                       <h3>{props.name}</h3>
                        {handleRedeemed(props.id,props.name,props.redeemed, props.percentage,props.image)}                        
                    </div>                   
                  <div className={
                    props.redeemed? "off span":"span"}>
                      <div className={props.percentage===100?"progress completed":"progress"} 
                      style={{width:`${props.percentage}%`}}>
                      </div>
                    </div>
                </div>        
             <span></span>
             <Modal name={nameSelected} image={imageSelected} classe={classe} id={id}/> 
                      
    </>
  )
}

export default ListRedeem
