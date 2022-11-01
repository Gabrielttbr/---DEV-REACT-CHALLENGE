import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/home";
import BuscarEndereco from "./pages/BuscarEndereco";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Home" exact element={<Home/>}></Route>
                <Route path="/BuscarEndereco" element={<BuscarEndereco/>}></Route>
         
            </Routes>
    
        </BrowserRouter>
    )
}
export default Router;