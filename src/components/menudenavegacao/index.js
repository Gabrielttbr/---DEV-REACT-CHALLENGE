import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as S from './styeled'


const MenuDeNavegacao = () => {
    return (
        <S.Menu>
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">BuscadorCEP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home"> <Link to="/BuscarEndereco">Buscar Endereço</Link></Nav.Link>
                            <Nav.Link href="#link">Buscar CEP</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </S.Menu>

    )
}
export default MenuDeNavegacao;            