import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/authorization/loginpage";
import Register from "./pages/authorization/registrationpage";
import { Users } from "./Context/Users";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import Main from "./pages/mainpage";
import BrowseProduct from "./pages/BrowseProduct";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import PaymentSection from "./pages/PaymentSection";

function App() {
  var [Total, setTotal] = useState(0);
  const [cur, setCur] = useState("");
  const [state, setState] = useState([{
    id: 0.2,
    firstname: "a",
    lastname: "m",
    email: "a",
    username: "a",
    password: 1,
    userProduct: [],
    
  }]);
  const [product, setProduct] = useState([
    {
      id: 0,
      qty: 1,
      catgory: "cat",
      name: "Cat Dress",
      price: 100,
      img: "https://images.pexels.com/photos/11187356/pexels-photo-11187356.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 1,
      qty: 1,
      catgory: "dog",
      name: "Dog Dress",
      price: 200,
      img: "https://images.pexels.com/photos/14540941/pexels-photo-14540941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      qty: 1,
      catgory: "cat",
      name: "Cat food",
      price: 300,
      img: "https://images.pexels.com/photos/9968610/pexels-photo-9968610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      qty: 1,
      catgory: "dog",
      name: "dog food",
      price: 400,
      img: "https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  return (
    <Users.Provider
      value={{
        state,
        setState,
        product,
        setProduct,
        cur,
        setCur,
        Total,
        setTotal,
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/main/0" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home/:id" element={<Homepage />} />
        <Route path="/main" element={<Main />}>
          <Route index element={<Homepage />} />
          <Route path=":id" element={<Homepage />} />
          <Route path="pro/:p" element={<BrowseProduct />} />
          <Route path="details/:pid" element={<ProductDetails />} />
          <Route path="cart/:id" element={<Cart />} />
          <Route path="pay/:id" element={<PaymentSection/>}/>
          <Route />
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </Users.Provider>
  );
}

export default App;
