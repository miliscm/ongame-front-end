import React,{useEffect, useState} from 'react'
import "../styles/pages/landing.css"
import logo from "../images/metin2-logo.png"
import api from "../services/api"

import ListRedeem from "../components/ListRedeem"

interface itemsData{
  id:number,
  image: string,
  name: string,
  percentage: number,
  redeemed: boolean,
}


const Landing = () => {  
  
  // const redeembleStyle = {border:"none", color:" #fff"}
  const [data, setData]=useState<itemsData[]>([]);
  // const [redeem,setRedeem ]=useState({});
  useEffect(()=>{
    api.get(`items/`).then((res)=>{
        setData(res.data); 
        
    })
  },[])
 
  
  return (
    <div className="modal-first">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
      <h1>Resgate sua premiação!</h1> 
      <div className="container">          
        { data.map((item)=>{
          
            return(
              
              <div className="card">
                <ListRedeem 
                id={item.id} 
                name={item.name} 
                redeemed={item.redeemed} 
                percentage={item.percentage}
                image={item.image}
                
                />  
                 
             </div>        
        );
        }
        )
      }               
        </div>
            
      </div>     
    
  )
}

export default Landing
