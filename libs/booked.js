const axios = require('axios');

async function getBooked() {
    try {
        const response = await axios.get('https://upbeatradio.net/api/v1/booked');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch booked DJs');
    }
}

module.exports = { getBooked };
