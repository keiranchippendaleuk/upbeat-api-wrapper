const axios = require('axios');

async function getHistory() {
    try {
        const response = await axios.get('https://upbeatradio.net/api/v1/recentlyPlayed');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch song history');
    }
}

module.exports = { getHistory };
