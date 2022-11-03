import axios from "axios";

export const IBGE = axios.create({
    baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades"
})

export const VIACEP = axios.create({
    baseURL: "https://viacep.com.br/ws"
})