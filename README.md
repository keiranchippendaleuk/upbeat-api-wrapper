# UpBeat API Node Module

This Node.js module provides functions to interact with the UpBeat API. It allows you to retrieve statistics, song history, and information about booked DJs.

## Installation

To install the UpBeat API module, you can use npm:

```bash
npm install upbeat-api-wrapper
```

# using this for an express api

```js
const express = require('express');
const upbeatApi = require('upbeat-api-wrapper');

const app = express();
const port = 3000;

app.get('/stats', async (req, res) => {
    try {
        const stats = await upbeatApi.getStats();
        res.json(stats);
    } catch (error) {
        console.error('Error fetching stats:', error.message);
        res.status(500).json({ error: 'Failed to fetch statistics' });
    }
});

app.get('/history', async (req, res) => {
    try {
        const history = await upbeatApi.getHistory();
        res.json(history);
    } catch (error) {
        console.error('Error fetching history:', error.message);
        res.status(500).json({ error: 'Failed to fetch song history' });
    }
});

app.get('/booked', async (req, res) => {
    try {
        const booked = await upbeatApi.getBooked();
        res.json(booked);
    } catch (error) {
        console.error('Error fetching booked DJs:', error.message);
        res.status(500).json({ error: 'Failed to fetch booked DJs' });
    }
});

app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});

```

# using this with console log

```js
const upbeatApi = require('upbeat-api-wrapper');

async function main() {
    try {
        const stats = await upbeatApi.getStats();
        console.log('Stats:', stats);

        const history = await upbeatApi.getHistory();
        console.log('History:', history);

        const booked = await upbeatApi.getBooked();
        console.log('Booked DJs:', booked);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
```

## extra info you need to know


# License

This project is licensed under the MIT License - see the LICENSE file for details.

# Please Note

Feel free to contribute to our collaborative project! While we can't ensure the flawless functionality of this API wrapper, your input is invaluable. If you encounter any issues, kindly inform us. Developers are welcome to lend their expertise and join our open-source initiative.

It's important to note that we have no association with Upbeat Radio. Any logos or assets belonging to them are not ours. Nevertheless, we appreciate your interest in our project. Thank you for taking the time to explore what we're building.