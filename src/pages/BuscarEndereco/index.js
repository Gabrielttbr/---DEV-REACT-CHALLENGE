//Components
import { Button, Col, Form, Row } from 'react-bootstrap'
import MenuDeNavegacao from "../../components/menudenavegacao";
import Rodape from "../../components/rodape";
import { Formik } from 'formik';
import * as yup from 'yup'
//style
import * as S from './styled'

const BuscarEndereco = () => {

    const valoresInciais = {
        cep: 'sdasd'
    }
    const esquemaValidacao = yup.object().shape({
        cep: yup.number().required()
    })


    return (
        <section>
            <MenuDeNavegacao />
            <S.Wrapper>
                <Formik
                    validationSchema={esquemaValidacao}
                    onSubmit={() => {
                        console.log(esquemaValidacao)
                    }}
                    initialValues={valoresInciais}>
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="cep">
                                    <Form.Label>cep</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="cep"
                                        name="cep"
                                        value={values.cep}
                                        onChange={handleChange}
                                        isValid={touched.cep && !errors.cep}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.cep}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Button type="submit">Submit form</Button>
                        </Form>
                    )}
                </Formik>
            </S.Wrapper>
            <Rodape />
        </section>
    )
}
export default BuscarEndereco;