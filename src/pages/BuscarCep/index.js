import React, { useState, useEffect } from "react";
//Componentes
import { Form, Container } from "react-bootstrap";
import Rodape from "../../components/rodape";
import MenuDeNavewgacao from "../../components/menudenavegacao";
import ButtonComponent from "../../components/button";
//APIS
import { IBGE, VIACEP } from "../../conifg/axiosConfig";
//css
import * as S from './styled'

const BuscarCep = () => {
    const [estados, setEstados] = useState([])
    const [municipios, setMunicipios] = useState([])
    const [escolhaEstadoInput, setEscolhaEstadoInput] = useState()
    const [escolhaMunicipiosInput, setEscolhaMunicipiosInput] = useState()
    const [valueInputLogradouro, setValueInputLogradouro] = useState()
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        IBGE.get('/estados')
            .then((res) => {
                if (res.status === 200) {
                    setEstados(res.data)
                }
            }).catch((erro) => {
                console.log(erro)
            })

    }, [])

    useEffect(() => {
        const uf = escolhaEstadoInput
        IBGE.get(`/estados/${uf}/municipios`)
            .then((response) => {
                setMunicipios(response.data)
            }).catch((erro) => {
                console.log(erro)
            })
    }, [escolhaEstadoInput])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const uf = estados.filter(item => item.id == escolhaEstadoInput)
        const municipio = escolhaMunicipiosInput
        const logradouro = valueInputLogradouro
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        VIACEP.get(`/${uf[0].sigla}/${municipio}/${logradouro}/json`)
            .then((res) => {
                alert(res.data.map(item => ` 
                    CEP: ${item.cep}
                    Código do Logradouro: ${item.ibge}
                    Município: ${municipio}
                    Logradouro: ${item.logradouro}
                    Bairro: ${item.bairro}

                `))
                window.document.location.reload()
            }).catch((erro) => {
                console.log(erro)
            })

    };


    return (
        <section>
            <MenuDeNavewgacao />
            <S.Wrapper>VIACEP
                <Container>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="validateEstado">
                            <Form.Label>Estado</Form.Label>
                            <Form.Select
                                onChange={(e) => setEscolhaEstadoInput(e.target.value)}>
                                {estados.map((item) => <option key={item.id} value={item.id}>{item.nome}</option>)}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="validateEstado">
                            <Form.Label>Município</Form.Label>
                            <Form.Select
                                onChange={(e) => setEscolhaMunicipiosInput(e.target.value)}>

                                {municipios.map((item) => <option key={item.id} value={item.nome}>{item.nome}</option>)}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="validateEstado">
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o nome do logradouro"
                                onChange={(e) => { setValueInputLogradouro(e.target.value) }}
                                required maxLength={50} minLength={3}
                                aria-describedby="logradouro"
                            />

                            <Form.Control.Feedback type="invalid">
                                Campo inválido
                            </Form.Control.Feedback>
                        </Form.Group>
                        <S.containerButtons>
                            <ButtonComponent type={'button'} value={'voltar'} navegation={'/home'}></ButtonComponent>
                            <ButtonComponent type={'submit'} value={'pesquisar'}></ButtonComponent>
                        </S.containerButtons>
                    </Form>
                </Container>
            </S.Wrapper>
            <Rodape />
        </section>
    )
}
export default BuscarCep;