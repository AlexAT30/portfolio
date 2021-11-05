import axios from 'axios';

export const sendForm = async ({name, email, message}) => {
  const response = await axios({
    url: 'https://portfolio-backend-agto.herokuapp.com/api/v1/send-form',
    method: 'POST',
    data: { name, email, message}
  });
  return response;
}