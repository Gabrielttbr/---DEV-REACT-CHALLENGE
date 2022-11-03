//Components
import React, { useState } from 'react';
import {Form, Row } from 'react-bootstrap';
import ButtonComponent from '../button';
//css
import * as S from './styled'
const ResultadoCep = ({resposta}) => {
    const [validated, setValidated] = useState(false);

    const novaBuscaClick = () => {
        console.log("click")
        return document.location.reload()
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    const imprimirClick = () => {
        window.print()
    }
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group md="4" controlId="validationCustom01">
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        defaultValue={resposta.logradouro}
                        disabled
                    />
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom02">
                    <Form.Label>Município / UF</Form.Label>
                    <Form.Control
                        disabled
                        type="text"
                        defaultValue={resposta.localidade}
                    />
                </Form.Group>
                <Form.Group md="4" controlId="validationCustomUsername">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={resposta.bairro}
                        disabled
                    />

                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group md="6" controlId="validationCustom03">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control 
                    type="text" 
                    defaultValue={resposta.cep} 
                    disabled
                    />
                  
                </Form.Group>
            </Row>
            <S.Wrapper>
                <div onClick={novaBuscaClick}>
                    <ButtonComponent type={"button"} value={"Nova busca"} ></ButtonComponent>
                </div>
                <div onClick={imprimirClick}>
                    <ButtonComponent type={"button"} value={"Imprimir"} ></ButtonComponent>
                </div>
            </S.Wrapper>
        </Form>
    )
}
export default ResultadoCep;