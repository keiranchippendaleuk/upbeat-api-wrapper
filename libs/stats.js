const axios = require('axios');

async function getStats() {
    try {
        const response = await axios.get('https://upbeatradio.net/api/v1/stats');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch statistics');
    }
}

module.exports = { getStats };
