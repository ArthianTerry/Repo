import axios from 'axios';

const prefixUrl = "http://localhost:8000";
const config_header = {
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "POST",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
}

export const getList = async () => {
    const data = await axios.post(prefixUrl + '/api/tasks', config_header);
    return data.data;
    // return axios
    // .get('/api/tasks', {
    //     headers: {'Content-Type': 'application/json'}
    // })
    // .then(res => {
    //     return res.data
    // })
}


export const addItem = async (title) => {
    const data = {title: title}
    const tempe = await axios.post(prefixUrl + '/api/tasks/store', data, config_header);
    return tempe;

    // return axios
    // .post('/api/tasks',
    //     {
    //         title: title
    //     },
    //     {
    //         headers: {'Content-Type': 'application/json'}
    //     }
    // )
    // .then(res => {
    //     console.log(res)
    // })
}

export const deleteItem = async (id) => {
    const data = {id: id}
    const tahu = await axios.post(prefixUrl + '/api/tasks/delete', data, config_header);
    return tahu;


    // await axios.delete(prefixUrl + `/api/tasks/${id}`, {
    //     headers: {'Content-Type': 'application/json'}
    // })
    // .then(res => {
    //     console.log(res)
    // })
    //axios.delete('api/tasks/${id}', {
    //    headers: { 'Content-Type': 'application/json'}
    //})
    //.then(res => {
    //    console.log(res)
    //})
    //.catch(err => {
    //    console.log(err)
    //})
}

export const updateItem = async (id, title) => {
    const data = {id:id, title: title};
    const t = await axios.post(prefixUrl + `/api/tasks/update`, data, config_header);
    return t;
    //return axios
    //.put('api/tasks/${id}',
    //{
    //    title: title
    //}, 
    //{
    //    headers: {'Content-Type': 'application/json'}
    //})
    //.then(res => {
    //    console.log(res)
    //})
    //.catch(err => {
    //    console.log(err)
    //})
}