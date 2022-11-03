//Componentes
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
//css
import * as S from './styled'

const ButtonComponent = ({ type, value, navegation=""}) => {
    return (
        <Button variant="primary" type={type}>
            {navegation.length > 0 ?(<Link className='white' to={navegation}>{value}</Link>): value}
        </Button>
    )
}
export default ButtonComponent;