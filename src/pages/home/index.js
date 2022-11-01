
//Components
import { Button, Container } from 'react-bootstrap';
import MenuDeNavegacao from '../../components/menudenavegacao'
import Rodape from '../../components/rodape'
//css
import * as S from './styled'


const Home = () => {
    return (
        <section>
            <MenuDeNavegacao />
            <Container>
                <S.containerChild>
                    <S.titulo>Bem vindo ao BuscadorCEP</S.titulo>
                    <S.texto>O aplicativo BuscadorCEP! Perimite que você encontre códigos  de endereçamento postais (CEP).</S.texto>
                    <S.texto>Se você já tiver o CEP em mãos, fique a vontade para buscar seu endereço no BuscadorCEP! Também vai te ajudar.</S.texto>
                    <S.texto>Aproveite! =D</S.texto>
                    <S.containerFilho>
                        <Button variant="primary">Buscar Endereço</Button>
                        <Button variant="primary">Buscar CEP</Button>
                    </S.containerFilho>
                </S.containerChild>
            </Container>
            <Rodape />
        </section>

    )
}
export default Home;