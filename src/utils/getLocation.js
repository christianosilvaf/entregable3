import axios from "axios";
const getLocation =(Location,func)=>{

    const url=`https://rickandmortyapi.com/api/location/${Location}`;
    
    axios
        .get(url)
        .then(({data})=>{func(data)})
        .catch((error)=>{console.log(error)});
}

export default getLocation