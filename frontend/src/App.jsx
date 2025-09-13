import Header from "./components/Header"
import {Routes, Route} from "react-router-dom"
import Shop from "./components/shop"
import Home from "./pages/home"
import About from "./pages/About"
import Contact from "./pages/Contact"


function Mainlayout({children}){
    return <>
    <div className="l">
        <Header />
        <div className="l">
            {children}
        </div>
    </div>
    </>
}

const App = () =>{
    return <>
  
    <Routes>


        <Route path="/" element={
            <Mainlayout>
                <Home />
            </Mainlayout>
            } />
        <Route path="/shop" element={
            <Mainlayout>
                <Shop />
            </Mainlayout>
            } />
        <Route path="/about" element={
            <Mainlayout>
                <About />
            </Mainlayout>
            } />
        <Route path="/contact" element={
            <Mainlayout>
                <Contact />
            </Mainlayout>
            } />



    </Routes>
   
    </>
}

export default App
