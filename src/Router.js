import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import BuscarEndereco from "./pages/BuscarEndereco";
import BuscarCep from "./pages/BuscarCep";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" exact element={<Home />}></Route>
                <Route path="/BuscarEndereco" element={<BuscarEndereco />}></Route>
                <Route path="/BuscarCep" element={<BuscarCep/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;