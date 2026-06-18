import axios from "axios";

const API_URL = "http://localhost:8000";

export const generateEmail = async (payload) => {
    const response = await axios.post(
        `${API_URL}/generate-email`,
        payload
    );

    return response.data;
};