import Header from "./components/Header"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Addproduct from "./Dashboard/Addproduct"
import Dashboard from "./Dashboard/Dashboard"
import Reports from "./Dashboard/Reports"
import Details from "./pages/Details"
import Product from "./Dashboard/product"
import LogIn from "./pages/login"
import SignUp from "./pages/signUp"
import UpdateProduct from "./Dashboard/Updatepr"
import Message from "./Dashboard/Message"




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


function Dashboardlayout({children}){
    return <>
    <div className="k">
        <Dashboard />
        <div className="k">
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
        <Route path="/cart" element={
            <Mainlayout>
                <Cart />
            </Mainlayout>
            } />
        <Route path="/login" element={
            <Mainlayout>
                <LogIn />
            </Mainlayout>
            } />
        <Route path="/signUp" element={
            <Mainlayout>
                <SignUp />
            </Mainlayout>
            } />
        <Route path="/details" element={
            <Mainlayout>
                <Details />
            </Mainlayout>
            } />
        <Route path="/login" element={
            <Mainlayout>
                <LogIn />
            </Mainlayout>
            } />
        <Route path="/signup" element={
            <Mainlayout>
                <SignUp />
            </Mainlayout>
            } />
        

{/*dashboard */}
            <Route path="/dashboard" element={
            <Dashboardlayout>
                <Reports />
            </Dashboardlayout>
            } />

            <Route path="/addproduct" element={
            <Dashboardlayout>
                <Addproduct />
            </Dashboardlayout>
            } />
            <Route path="/product" element={
            <Dashboardlayout>
                <Product />
            </Dashboardlayout>
            } />
            <Route path="/update/product/:id" element={
            <Dashboardlayout>
                <UpdateProduct />
            </Dashboardlayout>
            } />

            <Route path="/message" element={
            <Dashboardlayout>
                <Message />
            </Dashboardlayout>
            } />

    </Routes>
   
    </>
}

export default App
