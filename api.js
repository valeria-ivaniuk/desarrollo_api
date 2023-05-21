//En este archivo llamo a la API externa para obtener todos los datos que trae.
//Uso axios por el tipo de la version de node.js que tengo instalada. 
//Esta separado y guardado en otro archivo en el intento de mejorae el directorio.
const axios = require('axios');

const getDataAPI = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    const data = response.data;
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
};



module.exports = getDataAPI;