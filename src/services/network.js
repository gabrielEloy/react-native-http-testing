import axios from 'axios';

export const fetcher = async (...args) => {
  try {
    const {data} = await axios(...args);
    return data;
  } catch (err) {
    console.log(err);
  }
};
