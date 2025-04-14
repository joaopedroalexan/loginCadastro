import axios from 'axios';
import organizador from '../screens/OrganizadorScreen';


const api = axios.create({
    baseURL:"http://10.89.240.67:5000/api/v1/",
    headers:{
        'accept':"application/json"
    }
})

const sheets = {
    postLogin:(user)=>api.post('user/login',user),
    postCadastro:(user)=>api.post('/user/',user),
    postIngresso:(ingresso)=>api.post('/ingresso',ingresso),
    postOrganizador:(organizador)=>api.post('/organizador', organizador),
    postEvents:(evento)=>api.post('/evento', evento),
    getEventos: () => api.get("evento")
}

export default sheets