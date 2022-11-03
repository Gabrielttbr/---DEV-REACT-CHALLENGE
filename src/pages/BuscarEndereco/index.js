//Hoks
import { useState } from 'react';

//Components
import { Form, Container } from 'react-bootstrap'
import { cepMask } from '../../components/mascaraFomulario/cepMaks';
import MenuDeNavegacao from "../../components/menudenavegacao";
import ButtonComponent from '../../components/button';
import Rodape from "../../components/rodape";
import ResultadoCep from '../../components/resultado';

//style
import * as S from './styled'

const BuscarEndereco = () => {
    const [validated, setValidated] = useState(false);
    const [cepValue, setCepValue] = useState('');
    const [resultCep, setResultCep] = useState(false)
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        setResultCep(true)
    }
    return (
        <section>
            <MenuDeNavegacao />
            <S.Wrapper>
                <Container>
                    <S.textoFormate> Início > Buscador Endereço > {cepValue.length == 9? "Cep " +cepValue : null}</S.textoFormate>
                    { !resultCep &&
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicCep">
                                <Form.Label>CEP</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    maxLength={9}
                                    minLength={9}
                                    onChange={(e) => setCepValue(cepMask(e.target.value))}
                                    value={cepValue}
                                />
                            </Form.Group>
                            <ButtonComponent type={"submit"} value={"buscar"} ></ButtonComponent>
                            <ButtonComponent type={"submit"} value={"voltar"} navegation="/home"></ButtonComponent>
                        </Form> 
                    }
                    {resultCep && (<ResultadoCep/>)}
                </Container>
            </S.Wrapper>
            <Rodape />
        </section>
    )
}
export default BuscarEndereco;