import axios from "axios";

export const getTestimonial = async () => {
  try {
    let response = await axios.get('https://wknd-take-home-challenge-api.herokuapp.com/testimonial');
    if (response.status) {
      return response.data;
    } else {
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const getHelpTips = async () => {
  try {
    let response = await axios.get('https://wknd-take-home-challenge-api.herokuapp.com/help-tips');
    if (response.status) {
      return response.data;
    } else {
      return response;
    }
  } catch (error) {
    return error;
  }
};
