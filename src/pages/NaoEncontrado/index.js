import { Link } from 'react-router-dom';
import * as S from './styled'

const NaoEncontrado = () => {
    return(
        <S.Wrapper>
            <h2>Não encontramos essa págima</h2>
            <h1>404</h1>
            <h2>Volte para <Link to="/home"> Home</Link> </h2> 
        </S.Wrapper>
    )
}
export default NaoEncontrado;