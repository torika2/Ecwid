import axios from "axios"

export default {
    methods: {
        async getData(type, id = ''){
            return axios.get(`https://app.ecwid.com/api/v3/108362264/${type}${id}`,{
                headers:{
                    'Authorization':'Bearer public_RiNvjTVVzKLhFNWyzR5fNY68u1GMHLEs'
                }
            }).then((response) => {
                return response.data
            })
        }
    }
}