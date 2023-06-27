import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Button, Nav } from 'react-bootstrap';
import { Users } from '../Context/Users';


function PaymentSection() {
    const {id}=useParams()
    const ship=parseInt(id)
    const {cur,state}=useContext(Users)
    const nav=useNavigate()
    for (const x in state) {
      if(state[x].id=cur){
        var indexOfUser=x
      }
    }
  return (
    <Card className='container h-75 p-4  ' >
      <div><h1 className='text-center mt-1 border-bottom container w-50'>Purchasing Products</h1>{state.map((a) =>
          a.id == cur ? <div className='mt-5 overflow-auto ' style={{maxHeight:"300px"}}>{a.userProduct.map((c)=><Card className='container w-50 p-3 h-50'><div className='h4'>{c.name}</div> <div className='ms-auto h3'>${c.price}x{c.qty}=${c.price*c.qty}</div> </Card>)}</div> : null
        )}</div>
      <div className='d-flex align-items-end justify-content-end  flex-column h-100 container w-100'><h1 className='border-bottom'>Confirm purchase</h1>
      <div><h4 className=''  >Product net price&nbsp;&nbsp;&nbsp;:&nbsp;${id}</h4><h4 className=''  >Shipping charge&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;$50</h4><h1 className=''  >Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;${50+ship}</h1><Button onClick={()=>{ 
          state[indexOfUser].userProduct.splice(0,state[indexOfUser].userProduct.length)
          alert("Purchased successfully");  
          nav(`/main/cart/${cur}`)
        }}>Confirm</Button></div></div></Card>
  )
}

export default PaymentSection