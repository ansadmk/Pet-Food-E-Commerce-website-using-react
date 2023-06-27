import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import { Users } from "../Context/Users";
import Count from "./count";
import { useNavigate } from "react-router-dom";

function CartMap({ value, index }) {
  const [dummy, setDummy] = useState(1);
  const { state ,cur} = useContext(Users);
  const nav=useNavigate()
  // const reduce=(s,action)=>{
  //   const {type,payload}=action

  //   switch (type) {

  //     case 'sub':
  //       if(s.count!=2){

  //         state[index].userProduct[payload].price=(s.count-1)*state[index].userProduct[payload].price
  //         return {curPrice:(s.count-1)*state[index].userProduct[payload].price,count:s.count-1}
  //       }
  //       case 'add' :

  //         state[index].userProduct[payload].price=(s.count)*state[index].userProduct[payload].price
  //         state[index].userProduct[payload].qty=s.count
  //         return {curPrice:state[index].userProduct[payload].price,count:s.count+1}

  //       }
  //     }
  //     const [{curPrice,count},setCount]=useReducer(reduce,{curPrice:i,count:2})

  //  const addsub=(i)=>{
  //   state[index].userProduct.foreach((a,o)=>o==i?a.qty=count:null)}
  //  useEffect(addsub)

  return (
    <>
      {value.map((a, i) => (
        <div
          style={{ maxHeight: "800px", maxWidth: "500px" }}
          className="m-auto border-0 mt-5 d-flex gap-5 "
        >
          <img
            src={a.img}
            style={{ maxHeight: "500px", maxWidth: "300px" }}
            className="rounded-4 img-fluid ms-3 "
          />
          <div className="d-flex flex-column gap-5">
            <div className="">
              <h1>{a.name}</h1>
            </div>
            <Count a={a} />
            <Button
              className="mt-3 bg-dark border-0 justify-self-end"
              onClick={() => {
                state[index].userProduct.splice(i, 1);
                setDummy((b) => b + 1);
                nav(`/main/cart/${cur}`)
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartMap;
