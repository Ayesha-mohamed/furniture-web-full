import Header from "./components/Header"
import {Routes, Route} from "react-router-dom"
import Shop from "./components/shop"


const App = () =>{
    return <>
  
    <Header />
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/chair" element={<Chair />} /> */}
    </Routes>
   
    </>
}

export default App