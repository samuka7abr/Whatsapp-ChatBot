const axios = require('axios');
const config = require('../config');

/**
 * @param {string} recipient 
 * @param {string} text 
 * @returns {Promise<Object>} 
 */
exports.sendMessage = async (recipient, text) => {
  try {
    const response = await axios.post(`${config.whatsappApiUrl}/send`, {
      to: recipient,
      message: text,
      apiKey: config.whatsappApiKey
    });
    console.log("Message sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error.message);
    throw error;
  }
};
