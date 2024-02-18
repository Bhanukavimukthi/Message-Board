import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getChannels = async () => {
  const response = await axios.get(`${BASE_URL}/channels`);
  return response.data;
};

export const getMessages = async (channel) => {
  const response = await axios.get(`${BASE_URL}/messages/${channel}`);
  return response.data;
};

export const createMessage = async (channel, body) => {
  const response = await axios.post(`${BASE_URL}/${channel}`, { body });
  return response.data;
};
