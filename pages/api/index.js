import axios from 'axios';
export default async function handler(req, res) {
  const baseUrl = "http://homologacao3.azapfy.com.br/api/ps/metahumans";
  try {
    const response = await axios.get(baseUrl);
    res.status(200).json(response.data);
  } catch (error) {
    console.log('erro', error);
  } 
}