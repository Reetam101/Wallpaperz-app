import axios from "axios";

const API_KEY = "43914025-0ef2e9363a857e451acdc2d5f";
const API_URL = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params) => {
  let url = API_URL + "&per_page=25&safeResearch=true&editors_choice=true";
  if (!params) {
    return url;
  }
  let paramKeys = Object.keys(params);
  paramKeys.map((key) => {
    let value = key === "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });
  console.log("final url: ", url);
  return url;
};

export const apiCall = async (params) => {
  try {
    const response = await axios.get(formatUrl(params));
    return response;
  } catch (error) {
    console.log("error: ", error.message);
    return { success: false, msg: error.message };
  }
};
