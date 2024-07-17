import axios from "axios"
const URL = import.meta.env.REACT_APP_API_URL;
const authenticateUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/user`, data);
    return response
  } catch (error) {
    console.log(error)
  }
}

export default authenticateUser;