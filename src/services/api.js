import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/'
})

export default api;

//Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quanto no Node.js ou qualquer serviço de API. Todas as respostas são transformadas e retornadas em JSON; https://www.devmedia.com.br/consumindo-uma-api-com-react-js-e-axios/42900