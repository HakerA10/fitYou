import { axiosTrainerInstance } from '../axios';
// need to change trainer base url
export const uploadVideo = async (token, values) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axiosTrainerInstance.post(
      '/uploadVideo',
      values,
      config
    );
    if (data.status) {
      return data;
    }
  } catch (error) {
    const data = error;
    return data;
  }
};
export const trainerDetailsUpdate = async (token, values) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axiosTrainerInstance.post(
      '/trainerDetailsUpdate',
      values,
      config
    );
    if (data.status) {
      return data;
    }
  } catch (error) {
    const data = error;
    return data;
  }
};
