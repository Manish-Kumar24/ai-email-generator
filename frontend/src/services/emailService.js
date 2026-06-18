import axios from "axios";

const API_URL = "https://ai-email-generator-7dvw.onrender.com";

export const generateEmail = async (payload) => {
    const response = await axios.post(
        `${API_URL}/generate-email`,
        payload
    );

    return response.data;
};