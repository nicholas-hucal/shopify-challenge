import axios from "axios";

const BASE_URL = "https://api.openai.com/v1/engines/text-curie-001/completions";

const config = {
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    }
}

const formatData = (data) => {
    return {
        prompt: data,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
       };
}

const api = {
    getResponse: (data) => axios.post(BASE_URL, formatData(data), config)
}

export default api;