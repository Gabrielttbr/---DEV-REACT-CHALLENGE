import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import BuscarEndereco from "./pages/BuscarEndereco";
import BuscarCep from "./pages/BuscarCep";
import NaoEncontrado from "./pages/NaoEncontrado";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" exact element={<Home />}></Route>
                <Route path="/BuscarEndereco" element={<BuscarEndereco />}></Route>
                <Route path="/BuscarCep" element={<BuscarCep/>}></Route>
                <Route path="*" element={<NaoEncontrado/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;