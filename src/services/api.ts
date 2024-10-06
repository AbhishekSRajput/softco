import axios from 'axios';

const API_URL = 'https://example.com/api';

export const fetchUser = async (userId: string) => {
  const response = await axios.get(`${API_URL}/users/${userId}`);
  return response.data;
};
