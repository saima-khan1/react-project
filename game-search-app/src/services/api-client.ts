import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'028f2011dffa4064b43caf2a75ce425c',
    },
});

