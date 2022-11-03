//Hoks
import { useState } from 'react';

//Components
import { Form, Container } from 'react-bootstrap'
import { cepMask } from '../../components/mascaraFomulario/cepMaks';
import MenuDeNavegacao from "../../components/menudenavegacao";
import ButtonComponent from '../../components/button';
import Rodape from "../../components/rodape";
import ResultadoCep from '../../components/resultado';
//API
import { VIACEP } from '../../conifg/axiosConfig';
//style
import * as S from './styled'

const BuscarEndereco = () => {
    const [validated, setValidated] = useState(false);
    const [cepValue, setCepValue] = useState('');
    const [resultCep, setResultCep] = useState(false)
    const [respostaVIACEP, setRespostaVIACEP] = useState()
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const cep = cepValue.replace('-','')
        event.preventDefault();
        event.stopPropagation();
        VIACEP.get(`/${cep}/json/`)
        .then((res) => {
            setRespostaVIACEP(res.data)
            setResultCep(true)
        }).catch((erro) => console.log(erro))
    }
    return (
        <section>
            <MenuDeNavegacao />
            <S.Wrapper>
                <Container>
                    <S.textoFormate> Início > Buscador Endereço > {cepValue.length == 9 ? "Cep " + cepValue : null}</S.textoFormate>
                    {!resultCep &&
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
                            <S.ContainerButtons>

                                <ButtonComponent type={"button"} value={"voltar"} navegation="/home"></ButtonComponent>
                                <ButtonComponent type={"submit"} value={"buscar"} ></ButtonComponent>
                            </S.ContainerButtons>
                        </Form>
                    }
                {resultCep && (<ResultadoCep resposta={respostaVIACEP}/>)}
                </Container>
            </S.Wrapper>
            <Rodape />
        </section>
    )
}
export default BuscarEndereco;