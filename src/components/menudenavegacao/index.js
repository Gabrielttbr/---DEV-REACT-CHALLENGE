import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as S from './styeled'


const MenuDeNavegacao = () => {
    return (
        <S.Menu>
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand><Link className="navbar-brand" to="/home">BuscadorCEP</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/BuscarEndereco">Buscar Endereço</Link>
                            <Link className="nav-link" to="/BuscarCep"> Buscar Cep</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </S.Menu>

    )
}
export default MenuDeNavegacao;            